import React from 'react';
import PropTypes from 'prop-types';
import { FaHighlighter as Icon } from 'react-icons/fa';
import Theme from '@firstclasspostcodes/sw14/commonjs/theme';

const colors = Object.keys(Theme.palette);

const HighlightRender = ({ children, name, hue }) => {
  const style = {};
  if (name) {
    style.color = Theme.palette.color([name, hue]);
  }
  return (
    <span style={style}>
      <Icon />
      {children}
    </span>
  );
};

HighlightRender.propTypes = {
  name: PropTypes.string.isRequired,
  hue: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Highlight',
  name: 'highlight',
  type: 'object',
  fields: [
    {
      title: 'Color name',
      type: 'string',
      name: 'name',
      description: `
        Select the name of the color, some colors have no accompanying hue.
      `,
      options: {
        list: colors,
      },
    },
    {
      title: 'Color hue',
      type: 'number',
      name: 'hue',
      validation: Rule => Rule.min(0).max(9),
      description: `
        Enter the hue of the color.
      `,
    },
  ],
  blockEditor: {
    icon: Icon,
    render: HighlightRender,
  },
};
