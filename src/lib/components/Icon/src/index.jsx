import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@firstclasspostcodes/sw14/esm/components/Icon';

export const Component = ({ name, children }) => {
  const Icon = Icons[name];

  if (!Icon) {
    throw new Error(`<Icon name="${name}" /> does not exist`);
  }

  return (
    <>
      <Icon />
      {children}
    </>
  );
};

Component.displayName = 'CMS.Icon';

Component.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
