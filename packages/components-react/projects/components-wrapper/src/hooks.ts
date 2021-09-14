import type { MutableRefObject } from 'react';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { PorscheDesignSystemContext } from './provider';
import { getMergedClassName } from './utils';
import { interceptFetch } from '@mswjs/interceptors/lib/interceptors/fetch';
import { createInterceptor } from '@mswjs/interceptors';
import { CDN_BASE_URL, CDN_BASE_URL_CN } from './cdn.config';

let skipCheck = false;

/**
 * sets a flag that skips the need for `PorscheDesignSystemProvider` during testing
 * when `process.env.NODE_ENV === 'test'`
 */
export const skipCheckForPorscheDesignSystemProviderDuringTests = (): void => {
  skipCheck = true;
};

export const skipPorscheDesignSystemCDNRequestsDuringTests = (): void => {
  // intercept outgoing requests, filter for cdn url
  const interceptor = createInterceptor({
    modules: [interceptFetch],
    resolver: (request, ref) => {
      const requestURL = request.url.href;
      if (
        requestURL.startsWith(CDN_BASE_URL) ||
        requestURL.startsWith(CDN_BASE_URL_CN) ||
        process.env.NODE_ENV === 'test'
      ) {
        console.log('[%s] %s', request.method, request.url.toString());
        // interrupt request if it is going towards CDN
        return { status: 200, statusText: 'success' };
      }
    },
  });
  interceptor.apply();
  process.on('disconnect', () => {
    interceptor.restore();
  });
};

export const usePrefix = /*#__PURE__*/ (tagName: string): string => {
  if (process.env.NODE_ENV === 'test' && skipCheck) {
    return tagName;
  } else {
    const { prefix } = useContext(PorscheDesignSystemContext); // eslint-disable-line react-hooks/rules-of-hooks

    if (prefix === undefined) {
      throw new Error('It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.');
    }

    return prefix ? prefix + '-' + tagName : tagName;
  }
};

export const useEventCallback = /*#__PURE__*/ (
  ref: MutableRefObject<HTMLElement>,
  eventName: string,
  eventHandler: (e: Event) => void
): void => {
  useEffect(() => {
    const { current } = ref;
    if (current && eventHandler) {
      current.addEventListener(eventName, eventHandler);
      return () => current?.removeEventListener(eventName, eventHandler);
    }
  }, [eventHandler]); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useMergedClass = /*#__PURE__*/ (ref: MutableRefObject<HTMLElement>, className: string) => {
  const prevComponentClassName = useRef<string>();
  return useMemo(() => {
    const { current } = ref;
    let newClassName = className;

    if (current) {
      newClassName = getMergedClassName(current.className, prevComponentClassName.current, className);
      // the jsx does not override className when the attribute changes
      current.className = newClassName;
    }
    prevComponentClassName.current = className;
    return newClassName;
  }, [className]); // eslint-disable-line react-hooks/exhaustive-deps
};
