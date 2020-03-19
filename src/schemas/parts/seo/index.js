export default {
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO Configuration',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Enter the URI for this content. Omit any domain name.',
      validation: Rule => [
        Rule.required(),
        Rule.custom(slug => (/^\/.+/.test(slug) ? 'Slug cannot start with "/"' : true)),
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools',
      fieldset: 'seo',
      options: {
        baseUrl: () => process.env.SANITY_STUDIO_BASE_URL,
        slug: doc => doc.slug.current.replace(/^\//, ''),
      },
    },
    {
      name: 'changefreq',
      title: 'Change Frequency',
      type: 'string',
      fieldset: 'seo',
      description: `
        How frequently the page is likely to change. This value provides general 
        information to search engines and may not correlate exactly to how often 
        they crawl the page.
      `,
      options: {
        list: ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'],
      },
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      fieldset: 'seo',
      validation: Rule => Rule.min(0.0).max(1.0),
      description: `
        The priority of this URL relative to other URLs on your site. Valid
        values range from 0.0 to 1.0. This value does not affect how your 
        pages are compared to pages on other sites—it only lets the search 
        engines know which pages you deem most important for the crawlers.
      `,
    },
  ],

  initialValue: {
    changefreq: 'daily',
    priority: 0.5,
  },
};
