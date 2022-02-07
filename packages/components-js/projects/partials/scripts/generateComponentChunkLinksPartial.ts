import { COMPONENT_CHUNK_NAMES, COMPONENT_CHUNKS_MANIFEST } from '../../components-wrapper';
import { CDN_BASE_PATH_COMPONENTS } from '../../../../../cdn.config';

export const generateComponentChunkLinksPartial = (): string => {
  const chunkNamesTypeLiteral = COMPONENT_CHUNK_NAMES.map((x) => `'${x}'`).join(' | ');
  // 'any' is fallback when COMPONENT_CHUNK_NAMES is an empty array because components-js wasn't built, yet
  const types = `type ComponentChunkName = ${chunkNamesTypeLiteral || 'any'};

type ComponentChunkLinksOptions = {
  components?: ComponentChunkName[];
  cdn?: Cdn;
  /**
  * @deprecated withoutTags is deprecated and will be removed in v3
  **/
  withoutTags?: boolean;
  format?: Format;
};
type ComponentChunkLinksOptionsWithTags = ComponentChunkLinksOptions & {
  withoutTags?: false;
  format?: 'html';
};
type ComponentChunkLinksOptionsWithoutTags = ComponentChunkLinksOptions & {
  withoutTags?: true;
  format?: 'html';
};
type ComponentChunkLinksOptionsFormatJsx = ComponentChunkLinksOptions & {
  withoutTags?: false;
  format?: 'jsx';
};`;

  const func = `export function getComponentChunkLinks(opts?: ComponentChunkLinksOptionsWithTags): string;
export function getComponentChunkLinks(opts?: ComponentChunkLinksOptionsWithoutTags): string[];
export function getComponentChunkLinks(opts?: ComponentChunkLinksOptionsFormatJsx): JSX.Element[];
export function getComponentChunkLinks(opts?: ComponentChunkLinksOptions): string | string[] | JSX.Element[] {
  const { components, cdn, withoutTags, format }: ComponentChunkLinksOptions = {
    components: [],
    cdn: 'auto',
    withoutTags: false,
    format: 'html',
    ...opts
  };

  const supportedComponentChunkNames: ComponentChunkName[] = ${JSON.stringify(COMPONENT_CHUNK_NAMES)};
  const invalidComponentChunkNames = components.filter((x) => !supportedComponentChunkNames.includes(x));

  if (invalidComponentChunkNames.length) {
    throw new Error(\`The following supplied component chunk names are invalid:
  \${invalidComponentChunkNames.join(', ')}

Please use only valid component chunk names:
  \${supportedComponentChunkNames.join(', ')}\`);
  }

  const cdnBaseUrl = getCdnBaseUrl(cdn);
  const manifest = ${JSON.stringify(COMPONENT_CHUNKS_MANIFEST)};
  const urls = ['core'].concat(components).map((cmp) => \`\${cdnBaseUrl}/${CDN_BASE_PATH_COMPONENTS}/\${manifest[cmp]}\`);



  const linksHtml = urls
     // core needs crossorigin attribute / we need ternary otherwise false is written into link
    .map((url, idx) => \`<link rel=preload href=\${url} as=script\${idx === 0 ? " crossorigin" : ''}>\`).join('');

  const linksJsx = urls.map((url, idx) => <link rel="preload" href={url} as="script" {...(idx === 0 && { crossOrigin: 'true' })} />)

  const markup = format === 'html' ? linksHtml : linksJsx;

  return withoutTags ? urls : markup;
};`;

  return [types, func].join('\n\n');
};
