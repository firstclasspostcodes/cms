import React from 'react';
import { FiSquare } from 'react-icons/fi';

const ButtonRender = ({ children }) => <button>{children}</button>;

export default {
  title: 'Button',

  name: 'button',

  type: 'object',

  fieldsets: [
    {
      title: 'Presentation',
      name: 'presentation',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      title: 'Action',
      name: 'action',
      type: 'array',
      validation: Rule => Rule.required().length(1),
      of: [
        {
          type: 'externalLink',
        },
        {
          type: 'internalLink',
        },
      ],
    },
    {
      title: 'Background',
      name: 'background',
      fieldset: 'presentation',
      type: 'color',
    },
    {
      title: 'Border',
      name: 'border',
      fieldset: 'presentation',
      type: 'color',
    },
    {
      title: 'Text Color',
      name: 'color',
      fieldset: 'presentation',
      type: 'color',
    },
  ],
  blockEditor: {
    icon: FiSquare,
    render: ButtonRender,
  },
};