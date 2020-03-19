import React from 'react';
import PropTypes from 'prop-types';
import { FiBold as Icon } from 'react-icons/fi';

const BoldRenderer = ({ children }) => <strong>{children}</strong>;

BoldRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Bold',
  value: 'strong',
  blockEditor: {
    icon: Icon,
    render: BoldRenderer,
  },
};
