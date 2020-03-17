import React from 'react';
import { FaHighlighter } from 'react-icons/fa';

const HighlightRenderer = ({ children }) => <span style={{ color: 'yellow' }}>{children}</span>;

export default {
  title: 'Highlight',
  value: 'highlight',
  blockEditor: {
    icon: FaHighlighter,
    render: HighlightRenderer,
  },
};
