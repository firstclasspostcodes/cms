import React from 'react';
import PropTypes from 'prop-types';
import { FiAlignCenter as Icon } from 'react-icons/fi';

const CenterRenderer = ({ children }) => <span style={{ textAlign: 'center' }}>{children}</span>;

CenterRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Center',
  value: 'center',
  blockEditor: {
    icon: Icon,
    render: CenterRenderer,
  },
};
