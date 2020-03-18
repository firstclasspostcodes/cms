import React from 'react';

const HeadingRenderer = ({ children }) => (
  <h1 style={{ fontSize: '32px' }}>{children}</h1>
);

export default {
  title: 'Heading',
  value: 'heading',
  blockEditor: {
    render: HeadingRenderer,
  },
};
