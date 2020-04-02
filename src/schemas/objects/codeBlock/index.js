export default {
  title: 'Code Block',
  name: 'codeBlock',
  type: 'object',
  fields: [
    {
      title: 'Code',
      type: 'code',
      name: 'code',
    },
  ],
  preview: {
    select: {
      code: 'code',
    },
    prepare({ code, content }) {
      const title = code.language;
      // const subtitle = textFromBlock(content);

      return {
        title,
        // subtitle,
      };
    },
  },
};
