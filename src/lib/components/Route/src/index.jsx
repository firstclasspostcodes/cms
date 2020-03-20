import React from 'react';
import PropTypes from 'prop-types';

import { Page } from '../../Page';

export const Component = ({ render, page }) => {
  const children = <Page {...page} />;
  return render({ children });
};

Component.displayName = 'CMS.Route';

Component.propTypes = {
  render: PropTypes.func.isRequired,
  page: PropTypes.any.isRequired,
};
