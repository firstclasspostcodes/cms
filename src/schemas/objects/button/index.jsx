import React from 'react';
import PropTypes from 'prop-types';
import { FiSquare as Icon } from 'react-icons/fi';

const ButtonRender = ({ children }) => <button type="button">{children}</button>;

ButtonRender.propTypes = {
  children: PropTypes.node.isRequired,
};

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
    icon: Icon,
    render: ButtonRender,
  },
};
