import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Page } from '../../Page';

export const Component = ({ head, path, data: { route, site } }) => (
  <>
    <Helmet>
      <title>{route.seo?.seo_title || site.siteMetadata.title}</title>
      <meta charset="UTF-8" />
      <meta name="robots" content={route.disallowRobots ? 'noindex' : 'index follow'} />
      <meta
        name="description"
        content={route.seo?.meta_description || site.siteMetadata.description}
      />
      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${path}`} />
      <link type="text/plain" rel="security" href={`${site.siteMetadata.siteUrl}/security.txt`} />
      <link type="text/plain" rel="author" href={`${site.siteMetadata.siteUrl}/humans.txt`} />
      {head}
    </Helmet>
    <Page {...route.page} />
  </>
);

Component.displayName = 'CMS.Route';

Component.propTypes = {
  head: PropTypes.func,
  path: PropTypes.string.isRequired,
  data: PropTypes.shape({
    route: PropTypes.shape({
      disallowRobots: PropTypes.bool,
      seo: PropTypes.shape({
        seo_title: PropTypes.string,
        meta_description: PropTypes.string,
      }),
      page: PropTypes.shape(Page.propTypes),
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        siteUrl: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

Component.defaultProps = {
  head: () => null,
};
