import React from 'react';
import * as Icons from '@firstclasspostcodes/sw14/esm/components/Icon';

export const Component = ({ name, children }) => {
  const Icon = Icons[name];
  
  if (!Icon) {
    console.warn(`Icon "${name}" does not exist`);
    return null;
  }

  return (
    <>
      <Icon />
      {children}
    </>
  );
}