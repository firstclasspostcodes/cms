import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';
import useLink from '../../../hooks/useLink';

export const Component = ({ children, action, ...props }) => {
  const [link] = action;
  const linkProps = useLink(link);
  const presentationProps = usePresentation(props);
  return (
    <Button {...presentationProps} {...linkProps}>
      {children}
    </Button>
  );
};

Component.displayName = 'CMS.Button';

Component.propTypes = {
  children: PropTypes.any.isRequired,
  action: PropTypes.arrayOf([PropTypes.object]).isRequired,
};
