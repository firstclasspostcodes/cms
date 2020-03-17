import Heading from './styles/heading';
import Subheading from './styles/subheading';

import Center from './decorators/center';
import Bold from './decorators/bold';
import Italic from './decorators/italic';
import Underline from './decorators/underline';

export default {
  title: 'Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        Heading,
        Subheading,
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Caption', value: 'caption' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          Bold,
          Italic,
          Underline,
          Center,
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          { type: 'icon' },
          { type: 'color' },
          { type: 'highlight' },
          { type: 'button' },
          { type: 'internalLink' },
          { type: 'externalLink' }
        ],
      },
    },
    {
      type: 'detail',
    },
    {
      type: 'picture',
    },
    {
      type: 'interactable',
    },
    {
      type: 'content',
    },
  ],
};