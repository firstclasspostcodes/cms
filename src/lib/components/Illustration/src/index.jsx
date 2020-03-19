import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

export const Component = ({ image, fixed, ...props }) => {
  const presentationProps = usePresentation(props);

  const { caption, asset } = image;

  const [, projectId, dataset] = asset.path.split('/');

  const maxWidth = Math.min(asset.metadata.dimensions.width, 1024);

  const fluidProps = getFluidGatsbyImage(asset._id, { maxWidth }, { projectId, dataset });

  if (asset.extension === 'svg') {
    delete fluidProps.srcWebp;
    delete fluidProps.srcSetWebp;
  }
  
  return (
    <Pane {...props} {...presentationProps}>
      <Img alt={caption} title={caption} fluid={fluidProps} style={{ margin: 'auto', maxWidth }} />
    </Pane>
  );
};

Component.isType = (type) => type === 'illustration';