import merge from 'deepmerge';
import { TiDocument as Icon } from 'react-icons/ti';

import Presentation from '../parts/presentation';

const Page = {
  title: 'Page',

  description: `
    A Page document provides ordered references to one or many Content 
    and Pane documents. It provides styling fields for a "page" 
    (or application screen). 
  `,

  name: 'page',

  icon: Icon,

  type: 'document',

  fields: [
    {
      title: 'Title',
      description: 'Name of the page (for CMS)',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'content',
            },
            {
              type: 'pane',
            },
          ],
        },
      ],
    },
  ],
};

export default merge.all([Page, Presentation]);