import type { Theme } from '../../../types';
import { getCss } from '../../../utils';
import { getSelectOptionStyles } from '../../../styles/select/option-styles';
import { addImportantToEachRule, hostHiddenStyles } from '../../../styles';
import { spacingStaticSmall } from '../../../../../utilities/projects/utilities';

export const getComponentCss = (theme: Theme): string => {
  return getCss({
    '@global': addImportantToEachRule({
      ':host': {
        scrollMarginTop: spacingStaticSmall, // Creates top margin when navigating with keyboard and list is scrolled automatically
        ...hostHiddenStyles,
      },
    }),
    ...getSelectOptionStyles(theme),
    checkbox: {
      pointerEvents: 'none', // Avoid checkbox label click which updates input within p-checkbox-wrapper
    },
  });
};
