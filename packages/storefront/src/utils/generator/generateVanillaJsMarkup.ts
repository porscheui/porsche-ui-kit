import type { ElementConfig } from '@/components/playground/ConfiguratorControls';
import { camelCase, kebabCase } from 'change-case';

type ControlledInfo = { eventName: string; component: string; prop: string; val: string; isEventVal: boolean }[];

export const generateVanillaJsMarkup = (configs: (string | ElementConfig | undefined)[]): string => {
  const results = configs.map((config) => createVanillaJSMarkup(config));
  const markup = results.map(({ markup }) => markup).join('\n\n');
  const scripts = results.flatMap(({ scripts }) => scripts).join('\n');

  return `${markup}\n\n<script>\n${scripts}\n</script>`;
};

const createVanillaJSMarkup = (
  config: string | ElementConfig | undefined,
  indentLevel = 0
): { markup: string; scripts: string[] } => {
  if (!config) return { markup: '', scripts: [] };
  const indent = '  '.repeat(indentLevel);

  if (typeof config === 'string') return { markup: `${indent}${config}`, scripts: [] };

  const { tag, properties = {}, children = [] } = config;

  const events: ControlledInfo = [];
  const props = [];

  const propEntries = Object.entries(properties);
  for (const [key, value] of propEntries) {
    if (key.startsWith('on')) {
      const eventName = camelCase(key.replace('on', ''));
      const {
        eventParams,
        updateStateParams: [component, prop, val],
      } = extractParams(value);
      events.push({ eventName, component, prop, val, isEventVal: eventParams.length > 0 });
    } else if (typeof value === 'string') {
      props.push({ key: key === 'className' ? 'class' : kebabCase(key), value });
    } else if (key === 'style') {
      const styles = Object.entries(value)
        .map(([styleKey, styleValue]) =>
          styleKey.startsWith('--') ? `${styleKey}: ${styleValue}` : `${kebabCase(styleKey)}: ${styleValue}`
        )
        .join('; ');
      props.push({ key: 'style', value: styles });
    } else {
      props.push({ key: key, value: JSON.stringify(value) });
    }
  }

  const propsWithoutControlled = props.filter(({ key }) => !events.some(({ prop }) => prop === key));

  const propertiesString =
    propsWithoutControlled.length > 0
      ? ` ${propsWithoutControlled.map(({ key, value }) => `${kebabCase(key)}="${value}"`).join(' ')}`
      : '';

  const childrenResults = children.map((child) => createVanillaJSMarkup(child, indentLevel + 1));
  const childMarkup = childrenResults.map(({ markup }) => markup).join('\n');
  const childScripts = childrenResults.flatMap(({ scripts }) => scripts);

  const markup =
    children.length > 0
      ? `${indent}<${tag}${propertiesString}>\n${childMarkup}\n${indent}</${tag}>`
      : `${indent}<${tag}${propertiesString} />`;

  const scripts = events.length > 0 ? [generateVanillaJSControlledScript(tag, events), ...childScripts] : childScripts;

  return { markup, scripts };
};

const generateVanillaJSControlledScript = (tagName: string, controlled: ControlledInfo) => {
  const constant = camelCase(tagName.replace('p-', ''));
  const selector = `  const ${constant} = document.querySelector('${tagName}');`;

  const listeners = controlled
    .map(({ eventName, component, prop, val, isEventVal }) => {
      const element = camelCase(component.replace('p-', ''));
      if (isEventVal) {
        return `  ${constant}.addEventListener('${eventName}', (e) => (e.target.${prop} = ${val}))`;
      }
      return `  ${constant}.addEventListener('${eventName}', () => (${element}.${prop} = ${val}))`;
    })
    .join('\n');

  return [selector, listeners].join('\n');
};

const extractParams = (fn: typeof Function): { eventParams: string[]; updateStateParams: string[] } => {
  const match = fn.toString().match(/\(([^)]*)\)\s*=>\s*updateState\??.?\(([^)]*)\)/);

  if (match) {
    const eventParams = match[1] ? match[1].split(',').map((arg) => arg.trim()) : [];
    const updateStateParams = match[2].split(',').map((arg) => arg.trim().replaceAll("'", ''));

    return {
      eventParams,
      updateStateParams,
    };
  }

  return { eventParams: [], updateStateParams: [] };
};
