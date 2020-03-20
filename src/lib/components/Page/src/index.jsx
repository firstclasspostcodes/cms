import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

import { Reference } from '../../Reference';
import { Content } from '../../Content';
import { Pane } from '../../Pane';

export const Component = ({ render, body, ...props }) => {
  const presentationProps = usePresentation({ ...props, theme: Theme });
  const bodyComponents = body.filter(Boolean);
  const children = <Reference components={[Content, Pane]} body={bodyComponents} />;
  return Component.staticConfig.render({ children, ...presentationProps });
};

Component.displayName = 'Page';

Component.staticConfig = {
  render: () => {
    throw new Error(`Configure "page.render" for the <Page/> component.`);
  },
};

Component.propTypes = {
  body: PropTypes.arrayOf([PropTypes.object]).isRequired,
  render: PropTypes.func.isRequired,
};
