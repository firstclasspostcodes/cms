import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

export const Component = ({ Elements, name, _key: key, id, data, ...props }) => {
  const presentationProps = usePresentation(props);

  const componentKey = id || key;

  const { [name]: Element } = Elements;

  if (!Element) {
    throw new Error(`Missing Interactive Component: "${name}"`);
  }

  return (
    <Pane key={componentKey} {...props} {...presentationProps}>
      <Element {...data} />
    </Pane>
  );
};

Component.isType = type => type === 'interactable';

Component.propTypes = {
  _key: PropTypes.string.isRequired,
  Elements: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

Component.defaultProps = {
  data: {},
};
