import merge from 'deepmerge';
import { MdLink as Icon } from 'react-icons/md';

import SEO from '../parts/seo';

const Route = {
  title: 'Route',

  description: `
    A Route document provides a relative URL for a single Page
    document. Internal Links defined inside portable text reference
    Routes to ensure links remain intact, even though URLs might change.
  `,

  name: 'route',

  icon: Icon,

  type: 'document',

  fields: [
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      validation: Rule => Rule.required(),
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      title: 'Enabled',
      description: 'Is this route enabled?',
      type: 'boolean',
      name: 'enabled',
    },
    {
      title: 'Include route in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
      name: 'disallowRobots',
      type: 'boolean',
    },
  ],

  initialValue: {
    enabled: true,
    includeInSitemap: true,
    disallowRobots: false,
  },

  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title',
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};

export default merge.all([Route, SEO]);