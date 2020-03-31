import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Pane } from '@firstclasspostcodes/sw14';
import BlockContent from '@sanity/block-content-to-react';

import usePresentation from '../../../hooks/usePresentation';

import defaultSerializers from './defaultSerializers';

const Component = ({ content, presentationOptions = {}, ...props }) => {
  const presentationProps = usePresentation(props, presentationOptions);

  const { serializers } = Component.staticConfig;

  // eslint-disable-next-line react/prop-types
  serializers.container = ({ children, ...containerProps }) => (
    <Pane containment="layout paint" {...props} {...presentationProps} {...containerProps}>
      {children}
    </Pane>
  );

  return <BlockContent blocks={content} renderContainerOnSingleChild serializers={serializers} />;
};

Component.displayName = 'CMS.Content';

Component.propTypes = {
  content: PropTypes.any.isRequired,
  presentationOptions: PropTypes.object,
};

Component.staticConfig = {
  serializers: defaultSerializers,
};

Component.defaultProps = {
  presentationOptions: {},
};

Component.isType = type => /^content(block)?$/i.test(type);

export const Content = withTheme(Component);
