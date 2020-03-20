import merge from 'deepmerge';

import Presentation from '../../parts/presentation';

const ContentBlock = {
  title: 'Content block',
  name: 'contentBlock',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Provide a readable title or description for the content',
    },
    {
      name: 'content',
      type: 'portableText',
    },
  ],
};

export default merge.all([ContentBlock, Presentation]);
