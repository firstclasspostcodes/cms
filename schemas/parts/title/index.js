export default {
  fields: [
    {
      title: 'Title',
      description: 'The recognisable title for this document',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      description: 'Describe the content or location for this document.',
      name: 'description',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}