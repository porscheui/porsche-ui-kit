/* eslint-disable prefer-arrow/prefer-arrow-functions */
import type { Theme } from '../types';

type Host = HTMLElement | ShadowRoot;

// prettier-ignore
export function getHTMLElement<K extends keyof HTMLElementTagNameMap>(host: Host, selector: K): HTMLElementTagNameMap[K] | null;
export function getHTMLElement<E extends Element = Element>(host: Host, selector: string): E | null;
// prettier-ignore
export function getHTMLElement<K extends keyof HTMLElementTagNameMap>(host: Host, selector: K): HTMLElementTagNameMap[K] | null {
  return host.querySelector(selector);
}

// prettier-ignore
export function getHTMLElements<K extends keyof HTMLElementTagNameMap>(host: Host, selector: K): HTMLElementTagNameMap[K][];
export function getHTMLElements<E extends Element = Element>(host: Host, selector: string): E[];
// prettier-ignore
export function getHTMLElements<K extends keyof HTMLElementTagNameMap>(host: Host, selector: K): HTMLElementTagNameMap[K][] {
  return Array.from(host.querySelectorAll(selector));
}

// prettier-ignore
export function getShadowRootHTMLElement<K extends keyof HTMLElementTagNameMap>(host: HTMLElement, selector: K): HTMLElementTagNameMap[K] | null;
export function getShadowRootHTMLElement<E extends Element = Element>(host: Host, selector: string): E | null;
// prettier-ignore
export function getShadowRootHTMLElement<K extends keyof HTMLElementTagNameMap>(host: HTMLElement, selector: string): HTMLElementTagNameMap[K] | null {
  return getHTMLElement(host.shadowRoot, selector);
}

// prettier-ignore
export function getClosestHTMLElement<K extends keyof HTMLElementTagNameMap>(host: HTMLElement, selector: K): HTMLElementTagNameMap[K] | null;
export function getClosestHTMLElement<E extends Element = Element>(host: HTMLElement, selector: string): E | null;
// prettier-ignore
export function getClosestHTMLElement<K extends keyof HTMLElementTagNameMap>(host: HTMLElement, selector: string): HTMLElementTagNameMap[K] | null {
  return host.closest(selector);
}

export const getAttribute = (el: HTMLElement, attributeName: string): string | null => {
  return el.getAttribute(attributeName);
};

export const setAttribute = (el: HTMLElement, attributeName: string, attributeValue: string): void => {
  el.setAttribute(attributeName, attributeValue);
};

export const removeAttribute = (el: HTMLElement, attributeName: string): void => {
  el.removeAttribute(attributeName);
};

export const isDark = (theme: Theme): boolean => {
  return theme === 'dark';
};

// TODO: add addEventListener and removeEventListener
