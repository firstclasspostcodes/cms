import React from 'react';
import { FiBold } from 'react-icons/fi';

const BoldRenderer = ({ children }) => <strong>{children}</strong>;

export default {
  title: 'Bold',
  value: 'strong',
  blockEditor: {
    icon: FiBold,
    render: BoldRenderer,
  },
};
