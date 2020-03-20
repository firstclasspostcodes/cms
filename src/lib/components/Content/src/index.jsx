import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Pane } from '@firstclasspostcodes/sw14';
import BlockContent from '@sanity/block-content-to-react';

import usePresentation from '../../../hooks/usePresentation';

import defaultSerializers from './defaultSerializers';

// const defaultSerializers = {};

const Component = ({ content, presentationOptions = {}, ...props }) => {
  const presentationProps = usePresentation(props, presentationOptions);

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

Component.displayName = 'CMS.Content';

Component.propTypes = {
  content: PropTypes.object.isRequired,
  presentationOptions: PropTypes.object,
};

Component.defaultProps = {
  presentationOptions: {},
};

Component.isType = type => /^content(block)?$/i.test(type);

export const Content = withTheme(Component);
