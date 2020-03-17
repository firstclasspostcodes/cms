import React from 'react';
import { MdDetails } from 'react-icons/md';

const DetailRender = (props) => {
  console.log(props);
  return <h6>DetailRender</h6>;
};

export default {
  title: 'Detail',

  name: 'detail',

  type: 'object',

  fieldsets: [
    {
      title: 'Presentation',
      name: 'presentation',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      title: 'Summary',
      name: 'summary',
      type: 'portableText',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'portableText',
    },
    {
      title: 'Border',
      name: 'border',
      fieldset: 'presentation',
      type: 'color',
    },
  ],

  blockEditor: {
    icon: MdDetails,
    render: DetailRender,
  },

  preview: {
    select: {
      summary: 'summary',
      content: 'content',
    },
    prepare({ summary, content }) {
      const textFromBlock = (blocks = []) => {
        let title = 'No content';
        const block = blocks.find(block => block._type === 'block');
        if (block) {
          title = block.children.filter(child => child._type === 'span').map(span => span.text).join('');
        }
        return title;
      };

      const title = textFromBlock(summary);
      const subtitle = textFromBlock(content);

      return {
        title,
        subtitle,
      };
    }
  }
};