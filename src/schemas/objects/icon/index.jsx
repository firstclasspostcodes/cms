import React from 'react';
import PropTypes from 'prop-types';
import { FaRegDotCircle as Icon } from 'react-icons/fa';

const IconRender = ({ children }) => (
  <span>
    <Icon />
    {children}
  </span>
);

IconRender.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Icon',
  name: 'icon',
  type: 'object',
  fields: [
    {
      title: 'Icon Name',
      description:
        'Enter the name of the icon to display, see: https://www.glyphicons.com/sets/basic/',
      name: 'name',
      type: 'string',
    },
  ],
  blockEditor: {
    icon: Icon,
    render: IconRender,
  },
};
