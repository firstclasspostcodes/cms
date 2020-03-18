export default {
  fieldsets: [
    {
      title: 'Layout',
      name: 'layout',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      title: 'Properties',
      fieldset: 'layout',
      description: 'Define both grid and unit properties to be applied in JSON.',
      name: 'properties',
      type: 'json',
      options: {
        theme: 'github',
      },
    },
  ],
};
