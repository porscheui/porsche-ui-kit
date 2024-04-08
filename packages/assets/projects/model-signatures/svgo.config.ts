import { type Config } from 'svgo';

export const config: Config = {
  multipass: true,
  floatPrecision: 3,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false, // ensures view box is not changed
        },
      },
    },
    'sortAttrs', // sort element attributes for epic readability
    'convertStyleToAttrs', // convert styles into attributes
    {
      name: 'removeAttrs', // remove attributes by pattern
      params: {
        elemSeparator: '>',
        attrs: '(stroke|fill|xml:space)', // ensures coloring is applicable by CSS
      },
    },
  ],
};
