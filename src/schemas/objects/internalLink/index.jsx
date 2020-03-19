import React from 'react';
import PropTypes from 'prop-types';
import { FiLink as Icon } from 'react-icons/fi';

const InternalLinkRender = ({ children }) => (
  <span>
    {children}
    <Icon />
  </span>
);

InternalLinkRender.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Internal link to another document',
  description: 'Locate a document you want to link to',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      title: 'Document',
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'route',
        },
      ],
    },
    {
      title: 'Open in new tab',
      name: 'blank',
      description: 'Read https://css-tricks.com/use-target_blank/',
      type: 'boolean',
    },
  ],
  blockEditor: {
    icon: Icon,
    render: InternalLinkRender,
  },
};
