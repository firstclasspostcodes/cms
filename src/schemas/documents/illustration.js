import merge from 'deepmerge';
import { FaImage as Icon } from 'react-icons/fa';

import Presentation from '../parts/presentation';

const Illustration = {
  title: 'Illustration',

  description: `
    This document defines an illustration that is delivered through the CMS. It can be
    attached to Content and Pane documents.
  `,

  name: 'illustration',

  icon: Icon,

  type: 'document',

  fields: [
    {
      name: 'image',
      type: 'picture',
    },
  ],

  preview: {
    select: {
      media: 'image',
      image: 'image',
    },
    prepare({ image }) {
      return {
        title: image.caption,
      };
    },
  },
};

export default merge.all([Illustration, Presentation]);
