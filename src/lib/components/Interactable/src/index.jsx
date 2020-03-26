import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

export const Component = ({ name, _key: key, data, ...props }) => {
  const presentationProps = usePresentation(props);

  const componentKey = key;

  const { [name]: Interactable } = Component.staticConfig.components;

  if (!Interactable) {
    throw new Error(`Missing Interactive Component: "${name}"`);
  }

  return (
    <Pane key={componentKey} {...props} {...presentationProps}>
      <Interactable {...data} />
    </Pane>
  );
};

Component.displayName = 'CMS.Interactable';

Component.staticConfig = {
  components: {},
};

Component.isType = type => type === 'interactable';

Component.propTypes = {
  _key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.object,
};

Component.defaultProps = {
  data: {},
};
