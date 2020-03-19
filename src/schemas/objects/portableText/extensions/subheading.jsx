import React from 'react';
import PropTypes from 'prop-types';

const SubheadingRenderer = ({ children }) => <h2 style={{ fontSize: '28px' }}>{children}</h2>;

SubheadingRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Subheading',
  value: 'subheading',
  blockEditor: {
    render: SubheadingRenderer,
  },
};
