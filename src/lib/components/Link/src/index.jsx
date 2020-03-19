import React from 'react';
import { Typography } from '@firstclasspostcodes/sw14';

import useLink from '../../../hooks/useLink';

export const Component = ({ children, ...props }) => {
  const linkProps = useLink(props);

  return (
    <Typography.Text as="a" {...linkProps}>
      {children}
    </Typography.Text>
  );
}