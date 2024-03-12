import sdk from '@stackblitz/sdk';
import { getBackgroundColor, transformSrcAndSrcsetOfImgAndSourceTags } from './helper';
import { getVanillaJsProjectAndOpenOptions } from './getVanillaJsProjectAndOpenOptions';
import { getAngularProjectAndOpenOptions } from './getAngularProjectAndOpenOptions';
import { getReactProjectAndOpenOptions } from './getReactProjectAndOpenOptions';
import { getVueProjectAndOpenOptions } from './getVueProjectAndOpenOptions';
import type {
  StackBlitzFrameworkOpts,
  GetStackBlitzProjectAndOpenOptions,
  SharedImportKey,
  ExternalDependency,
} from '@/utils';
import type { PlaygroundTheme, BackgroundColor, Framework, PlaygroundDir } from '@/models';
import type { PorscheDesignSystemBundle } from '@/utils/stackblitz/types';

export type OpenInStackBlitzOpts = {
  porscheDesignSystemBundle: PorscheDesignSystemBundle;
  markup: string;
  dir: PlaygroundDir;
  framework: Exclude<Framework, 'shared'>;
  theme: PlaygroundTheme;
  backgroundColor: BackgroundColor;
  externalDependencies: ExternalDependency[];
  sharedImportKeys: SharedImportKey[];
  pdsVersion: string;
};

export const openInStackBlitz = (opts: OpenInStackBlitzOpts): void => {
  const { markup, framework, theme, backgroundColor, ...rest } = opts;

  const stackBlitzFrameworkOpts: StackBlitzFrameworkOpts = {
    ...rest,
    markup: transformSrcAndSrcsetOfImgAndSourceTags(markup),
    title: `Porsche Design System ${framework} sandbox`,
    description: 'Porsche Design System component example',
    globalStyles:
      theme === 'auto'
        ? `body { background: ${getBackgroundColor('light', backgroundColor)}; }
      @media (prefers-color-scheme: dark) {
        body { background: ${getBackgroundColor('dark', backgroundColor)}; }
      }`
        : `body { background: ${getBackgroundColor(theme, backgroundColor)}; }`,
  };

  const getProjectAndOpenOptionsMap: Record<Exclude<Framework, 'shared'>, GetStackBlitzProjectAndOpenOptions> = {
    'vanilla-js': getVanillaJsProjectAndOpenOptions,
    angular: getAngularProjectAndOpenOptions,
    react: getReactProjectAndOpenOptions,
    vue: getVueProjectAndOpenOptions,
  };

  const { openFile, ...project } = getProjectAndOpenOptionsMap[framework](stackBlitzFrameworkOpts);

  sdk.openProject(project, { openFile });
};
