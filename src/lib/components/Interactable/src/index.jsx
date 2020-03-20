import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

export const Component = ({ name, _key: key, id, data, ...props }) => {
  const presentationProps = usePresentation(props);

  const componentKey = id || key;

  const { [name]: Interactable } = Component.interactableComponents;

  if (!Interactable) {
    throw new Error(`Missing Interactive Component: "${name}"`);
  }

  return (
    <Pane key={componentKey} {...props} {...presentationProps}>
      <Interactable {...data} />
    </Pane>
  );
};

Component.interactableComponents = {};

Component.isType = type => type === 'interactable';

Component.propTypes = {
  _key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

Component.defaultProps = {
  data: {},
};
