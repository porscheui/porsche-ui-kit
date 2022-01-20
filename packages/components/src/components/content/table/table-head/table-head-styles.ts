import { getCss } from '../../../../utils';
import { addImportantToRule } from '../../../../styles/common';

export const getComponentCss = (): string => {
  return getCss({
    ':host': {
      display: addImportantToRule('table-header-group'),
    },
  });
};
