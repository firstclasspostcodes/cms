import React from 'react';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

const Component = ({ Elements, name, _key: key, id, ...props }) => {
  const presentationProps = usePresentation(props);

  const componentKey = id || key;
  
  const { [name]: Element } = Elements;

  if (!Element) {
    throw new Error(`Missing Interactive Component: "${name}"`);
  }

  const componentProps = props.data || {};

  return (
    <Pane key={componentKey} {...props} {...presentationProps}>
      <Element {...componentProps} />
    </Pane>
  );
};

Interactable.isType = (type) => type === 'interactable';

export default Interactable;