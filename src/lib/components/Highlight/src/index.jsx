import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@firstclasspostcodes/sw14';

import useColor from '../../../hooks/useColor';

export const Component = ({ children, ...props }) => {
  const highlight = useColor(props);

  return <Typography.Highlight highlight={highlight}>{children}</Typography.Highlight>;
};

Component.displayName = 'CMS.Highlight';

Component.propTypes = {
  children: PropTypes.any.isRequired,
};
