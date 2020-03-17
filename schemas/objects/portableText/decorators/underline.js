import React from 'react';
import { FiUnderline } from 'react-icons/fi';

const UnderlineRenderer = ({ children }) => <u>{children}</u>;

export default {
  title: 'Underline',
  value: 'u',
  blockEditor: {
    icon: FiUnderline,
    render: UnderlineRenderer,
  },
};
