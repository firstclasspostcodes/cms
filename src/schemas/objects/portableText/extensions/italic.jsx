import React from 'react';
import PropTypes from 'prop-types';
import { FiItalic as Icon } from 'react-icons/fi';

const ItalicRenderer = ({ children }) => <em>{children}</em>;

ItalicRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Italic',
  value: 'em',
  blockEditor: {
    icon: Icon,
    render: ItalicRenderer,
  },
};
