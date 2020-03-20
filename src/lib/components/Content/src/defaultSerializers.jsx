/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@firstclasspostcodes/sw14';
import BlockContent from '@sanity/block-content-to-react';

import { HardBreak } from '../../HardBreak';
import { Heading } from '../../Heading';
import { Interactable } from '../../Interactable';
import { Illustration } from '../../Illustration';
import { Button } from '../../Button';
import { Detail } from '../../Detail';
import { Highlight } from '../../Highlight';
import { Color } from '../../Color';
import { Link } from '../../Link';
import { Icon } from '../../Icon';

const spreadProps = (Component, props = {}) => ({ _key: key, children, mark }) => {
  const componentProps = { key, ...props };

  if (typeof mark !== 'string') {
    Object.assign(componentProps, mark);
  }

  return <Component {...componentProps}>{children}</Component>;
};

const passThrough = ({ children }) => <>{children}</>;

const blocks = [BlockContent.defaultSerializers.types.block];

const types = {
  block: props => {
    const heading = <Heading {...props} />;
    if (!heading) {
      return BlockContent.defaultSerializers.types.block(props);
    }
    return heading;
  },

  picture: ({ node }) => <Illustration image={node} spacing={{ mb: 4 }} />,

  interactable: ({ node }) => <Interactable {...node} />,

  detail: ({ node }) => <Detail {...node} />,
};

const marks = {
  button: spreadProps(Button),

  center: passThrough,

  u: spreadProps(Typography.Text, { decoration: 'underline' }),

  strong: spreadProps(Typography.Text, { weight: 'bold' }),

  em: spreadProps(Typography.Text, { slant: -10 }),

  icon: spreadProps(Icon),

  color: spreadProps(Color),

  highlight: spreadProps(Highlight),

  internalLink: spreadProps(Link),

  externalLink: spreadProps(Link),
};

export default {
  hardBreak: HardBreak,
  blocks,
  types,
  marks,
};
