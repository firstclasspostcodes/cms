import Theme from '@firstclasspostcodes/sw14/commonjs/theme';

const breakpoints = Object.keys(Theme.breakpoints);

const halignType = {
  type: 'string',
  enum: [
    'left',
    'right',
    'center',
    'justify',
    'justify-center',
  ],
};

const valignType = {
  type: 'string',
  enum: [
    'top',
    'bottom',
    'center',
    'stretch',
  ],
};

export default {
  type: 'object',
  additionalProperties: false,
  properties: {
    halign: {
      oneOf: [
        halignType,
        {
          type: 'object',
          additionalProperties: false,
          properties: breakpoints.reduce((obj, key) => ({
            [key]: halignType,
            ...obj,
          }), {}),
        },
      ],
    },
    valign: {
      oneOf: [
        valignType,
        {
          type: 'object',
          additionalProperties: false,
          properties: breakpoints.reduce((obj, key) => ({
            [key]: valignType,
            ...obj,
          }), {}),
        },
      ],
    },
  },
};