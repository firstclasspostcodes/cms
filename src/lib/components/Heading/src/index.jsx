import React from 'react';
import { Typography } from '@firstclasspostcodes/sw14';

export const Component = (props) => {
  const { children, node } = props;

  const { style = 'normal' } = node;

  let alignment = null;

  const styleMarks = [].concat(...node.children.map(child => child.marks));

  if (styleMarks.includes('center')) {
    alignment = 'center';
  }

  let Heading = null;

  switch (style) {
    case 'heading':
      Heading = Typography.Heading;
      break;
    case 'subheading':
      Heading = Typography.Subheading;
      break;
    case 'caption':
      Heading = Typography.Caption;
      break;
    case 'normal':
      Heading = Typography.P;
      break;
    default:
      if (/^h\d/.test(style)) {
        Heading = Typography[style.toUpperCase()]
      }
  }

  if (!Heading) {
    return null;
  }

  return <Heading alignment={alignment}>{children}</Heading>;
};