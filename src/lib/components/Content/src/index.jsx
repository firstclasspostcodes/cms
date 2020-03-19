import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Pane } from '@firstclasspostcodes/sw14';
import BlockContent from '@sanity/block-content-to-react';

import { Interactable } from '../../Interactable';

import usePresentation from '../../../hooks/usePresentation';

import defaultSerializers from './defaultSerializers';

const Content = ({ content, InteractableElements = {}, presentationOptions = {}, ...props }) => {
  const presentationProps = usePresentation(props, presentationOptions);

  // eslint-disable-next-line react/prop-types
  defaultSerializers.types.interactable = ({ node }) => (
    <Interactable Elements={InteractableElements} {...node} />
  );

  // eslint-disable-next-line react/prop-types
  defaultSerializers.container = ({ children, ...containerProps }) => (
    <Pane containment="layout paint" {...props} {...presentationProps} {...containerProps}>
      {children}
    </Pane>
  );

  return (
    <BlockContent blocks={content} renderContainerOnSingleChild serializers={defaultSerializers} />
  );
};

Content.propTypes = {
  content: PropTypes.object.isRequired,
  presentationOptions: PropTypes.object,
  InteractableElements: PropTypes.object,
};

Content.defaultProps = {
  presentationOptions: {},
  InteractableElements: {},
};

Content.isType = type => /^content(block)?$/i.test(type);

export default withTheme(Content);
