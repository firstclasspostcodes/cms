import Theme from '@firstclasspostcodes/sw14/commonjs/theme';

const breakpoints = Object.keys(Theme.breakpoints);

const spacingType = {
  oneOf: [
    {
      type: 'number',
    },
    {
      type: 'string',
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: breakpoints.reduce((obj, key) => ({
        [key]: {
          oneOf: [
            {
              type: 'number',
            },
            {
              type: 'string',
            },
          ],
        },
        ...obj,
      }), {}),
    }
  ]
};

const spacings = ['p', 'm'].reduce((arr, spacing) => (
  arr.concat([spacing], ['y', 'x', 't', 'r', 'b', 'l'].map((dir) => `${spacing}${dir}`))
), []);

export default {
  type: 'object',
  additionalProperties: false,
  properties: spacings.reduce((obj, spacing) => ({
    [spacing]: spacingType,
    ...obj,
  }), {}),
};
