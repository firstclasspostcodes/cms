import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@firstclasspostcodes/sw14';

import useColor from '../../../hooks/useColor';

export const Component = ({ children, ...props }) => {
  const colorProp = useColor(props);

  return <Typography.Text color={colorProp}>{children}</Typography.Text>;
};

Component.displayName = 'CMS.Color';

Component.propTypes = {
  children: PropTypes.node.isRequired,
};
