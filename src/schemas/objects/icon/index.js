import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

const IconRender = ({ children }) => <span><FaRegDotCircle /> {children}</span>;

export default {
  title: 'Icon',
  name: 'icon',
  type: 'object',
  fields: [
    {
      title: 'Icon Name',
      description: 'Enter the name of the icon to display, see: https://www.glyphicons.com/sets/basic/',
      name: 'name',
      type: 'string',
    },
  ],
  blockEditor: {
    icon: FaRegDotCircle,
    render: IconRender,
  },
};