export default {
  title: 'Code Example',
  name: 'codeExample',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Languages',
      name: 'languages',
      type: 'array',
      of: [
        {
          type: 'codeBlock',
        },
      ],
    },
  ],
};
