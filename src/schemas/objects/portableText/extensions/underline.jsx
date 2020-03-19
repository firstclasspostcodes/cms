import React from 'react';
import PropTypes from 'prop-types';
import { FiUnderline as Icon } from 'react-icons/fi';

const UnderlineRenderer = ({ children }) => <u>{children}</u>;

UnderlineRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Underline',
  value: 'u',
  blockEditor: {
    icon: Icon,
    render: UnderlineRenderer,
  },
};
