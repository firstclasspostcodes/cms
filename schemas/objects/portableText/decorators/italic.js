import React from 'react';
import { FiItalic } from 'react-icons/fi';

const ItalicRenderer = ({ children }) => <em>{children}</em>;

export default {
  title: 'Italic',
  value: 'em',
  blockEditor: {
    icon: FiItalic,
    render: ItalicRenderer,
  },
};
