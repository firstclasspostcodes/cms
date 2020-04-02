import Heading from './extensions/heading';
import Code from './extensions/code';
import Subheading from './extensions/subheading';
import Bold from './extensions/bold';
import Center from './extensions/center';
import Italic from './extensions/italic';
import Underline from './extensions/underline';
import Sample from './extensions/sample';

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
        Code,
      ],
      marks: {
        decorators: [Bold, Italic, Underline, Center, Sample],
        annotations: [
          { type: 'icon' },
          { type: 'color' },
          { type: 'highlight' },
          { type: 'button' },
          { type: 'internalLink' },
          { type: 'externalLink' },
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
    {
      type: 'codeExample',
    },
    {
      type: 'table',
    },
  ],
};
