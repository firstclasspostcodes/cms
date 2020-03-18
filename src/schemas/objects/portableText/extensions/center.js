import React from 'react';
import { FiAlignCenter } from 'react-icons/fi';

const CenterRenderer = ({ children }) => <span style={{ textAlign: 'center' }}>{children}</span>;

export default {
  title: 'Center',
  value: 'center',
  blockEditor: {
    icon: FiAlignCenter,
    render: CenterRenderer,
  },
};
