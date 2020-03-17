const Picture = {
  title: 'Image',
  name: 'picture',
  type: 'image',
  validation: Rule => Rule.required(),
  options: {
    hotspot: true,
    metadata: ['palette'],
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      }
    },
  ]
};


export default Picture;
