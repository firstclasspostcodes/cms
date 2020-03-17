import React from 'react';

const SubheadingRenderer = ({ children }) => (
  <h2 style={{ fontSize: '28px' }}>{children}</h2>
);

export default {
  title: 'Subheading',
  value: 'subheading',
  blockEditor: {
    render: SubheadingRenderer,
  },
};
