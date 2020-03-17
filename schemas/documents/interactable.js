import merge from 'deepmerge';
import { GiConsoleController as Icon } from 'react-icons/gi';

import Presentation from '../parts/presentation';

const Interactable = {
  title: 'Interactive Element',

  description: `
    This document defines and provides configuration for an interactive element. If the name
    is incorrect or does not exist, the element is not displayed.
  `,

  name: 'interactable',

  icon: Icon,

  type: 'document',

  fields: [
    {
      title: 'Name',
      type: 'string',
      name: 'name',
      validation: Rule => Rule.required(),
      description: `
        The recognised name for the interactive element, for example "PostcodeLookup"
      `,
    },
    {
      title: 'Configuration',
      description: `
        A JSON object representing any configuration that is sent to the interactive element.
      `,
      name: 'data',
      type: 'json',
    },
  ],

  preview: {
    select: {
      title: 'name',
    },
  },
};

export default merge.all([Interactable, Presentation]);