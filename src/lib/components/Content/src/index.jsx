import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Pane } from '@firstclasspostcodes/sw14';
import BlockContent from '@sanity/block-content-to-react';

import usePresentation from '../../../hooks/usePresentation';

import defaultSerializers from './defaultSerializers';

const Content = ({ content, presentationOptions = {}, ...props }) => {
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

Content.propTypes = {
  content: PropTypes.object.isRequired,
  presentationOptions: PropTypes.object,
};

Content.defaultProps = {
  presentationOptions: {},
};

Content.isType = type => /^content(block)?$/i.test(type);

export default withTheme(Content);
