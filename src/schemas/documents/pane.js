import merge from 'deepmerge';
import { MdWeb as Icon } from 'react-icons/md';

import Title from '../parts/title';
import Layout from '../parts/layout';
import Presentation from '../parts/presentation';

const Pane = {
  title: 'Pane',

  description: `
    A Pane document provides structure to one or many referenced Content or 
    nested Pane documents. Referenced documents can have their layout configured.
  `,

  name: 'pane',

  icon: Icon,

  type: 'document',

  fields: [
    {
      title: 'Content',
      name: 'before',
      description: 'Text to be displayed above the body',
      type: 'contentBlock',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      options: {
        editModal: 'fullscreen',
      },
      of: [
        {
          type: 'contentBlock',
        },
        {
          type: 'reference',
          to: [
            {
              type: 'content',
            },
            {
              type: 'illustration',
            },
            {
              type: 'interactable',
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

export default merge.all([Title, Pane, Layout, Presentation]);
