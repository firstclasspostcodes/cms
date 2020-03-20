import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

export const Component = ({ image, ...props }) => {
  const presentationProps = usePresentation(props);

  const { caption, asset } = image;

  const { extension, metadata, path, _id: id } = asset;

  const [, projectId, dataset] = path.split('/');

  const maxWidth = Math.min(metadata.dimensions.width, 1024);

  const fluidProps = getFluidGatsbyImage(id, { maxWidth }, { projectId, dataset });

  if (extension === 'svg') {
    delete fluidProps.srcWebp;
    delete fluidProps.srcSetWebp;
  }

  return (
    <Pane {...props} {...presentationProps}>
      <Img alt={caption} title={caption} fluid={fluidProps} style={{ margin: 'auto', maxWidth }} />
    </Pane>
  );
};

Component.displayName = 'CMS.Illustration';

Component.isType = type => type === 'illustration';

Component.propTypes = {
  image: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    asset: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      metadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};
