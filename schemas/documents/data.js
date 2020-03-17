import { FaDatabase as Icon } from 'react-icons/fa';

export default {
  title: 'JSON',

  description: `
    Sometimes, data needs to be represented in its simplest form. This document
    provides the ability to define low-level settings and configuration for applications.
  `,

  name: 'static',

  icon: Icon,

  type: 'document',

  fields: [
    {
      title: 'Title',
      description: 'Name of the static JSON',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Data',
      description: 'The JSON data',
      name: 'data',
      type: 'json',
    },
  ],
};
