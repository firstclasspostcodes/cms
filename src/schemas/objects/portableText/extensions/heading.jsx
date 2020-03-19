import React from 'react';
import PropTypes from 'prop-types';

const HeadingRenderer = ({ children }) => <h1 style={{ fontSize: '32px' }}>{children}</h1>;

HeadingRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Heading',
  value: 'heading',
  blockEditor: {
    render: HeadingRenderer,
  },
};
