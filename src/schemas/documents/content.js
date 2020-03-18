import merge from 'deepmerge';
import { FiFileText as Icon } from 'react-icons/fi';

import Title from '../parts/title';
import Presentation from '../parts/presentation';

const Page = {
  title: 'Content',

  description: `
    Content is the lowest-level rich-text block. It can be referenced
    directly by a Page document (useful for "About Us" etc.) or by Pane,
    for usage as part of a grid column.
  `,

  name: 'content',

  icon: Icon,

  type: 'document',

  fields: [
    {
      name: 'content',
      type: 'portableText',
    },
  ],
};

export default merge.all([Title, Page, Presentation]);