import React from 'react';
import PropTypes from 'prop-types';
import { FiExternalLink as Icon } from 'react-icons/fi';

const ExternalLinkRender = ({ children }) => (
  <span>
    {children}
    <Icon />
  </span>
);

ExternalLinkRender.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'URL',
  name: 'externalLink',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel', 'chargebee'],
        }),
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
    render: ExternalLinkRender,
  },
};
