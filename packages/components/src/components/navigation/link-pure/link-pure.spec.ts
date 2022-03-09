import { LinkPure } from './link-pure';
import * as buttonLinkPureUtils from '../../../utils/button-link-pure-utils';
import * as transitionListenerUtils from '../../../utils/transition-listener';
import * as linkValidationUtils from '../link-validation';

describe('componentWillLoad', () => {
  it('should call throwIfInvalidLinkUsage()', () => {
    const spy = jest.spyOn(linkValidationUtils, 'throwIfInvalidLinkUsage');

    const component = new LinkPure();
    component.host = document.createElement('p-link-pure');
    component.href = '#';
    component.componentWillLoad();

    expect(spy).toBeCalledWith(component.host, component.href);
  });
});

describe('componentWillRender', () => {
  it('should call warnIfParentIsPTextAndIconIsNone()', () => {
    const spy = jest.spyOn(buttonLinkPureUtils, 'warnIfParentIsPTextAndIconIsNone');

    const component = new LinkPure();
    component.host = document.createElement('p-link-pure');
    component.host.attachShadow({ mode: 'open' });
    component.href = '#';
    component.componentWillRender();

    expect(spy).toBeCalledWith(component.host, component.icon);
  });
});

describe('componentDidLoad', () => {
  let spy: jest.SpyInstance;
  beforeEach(() => {
    spy = jest.spyOn(transitionListenerUtils, 'transitionListener').mockImplementation(() => {});
  });

  it('should not call transitionListener for default size', () => {
    const component = new LinkPure();
    component.componentDidLoad();

    expect(spy).not.toBeCalled();
  });

  it('should call transitionListener when size="inherit"', () => {
    const component = new LinkPure();
    component.size = 'inherit';
    component.componentDidLoad();

    expect(spy).toBeCalledWith(undefined, 'font-size', expect.anything());
  });
});
