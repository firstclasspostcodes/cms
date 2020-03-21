import React from 'react';
import PropTypes from 'prop-types';
// import Img from 'gatsby-image';
// import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

export const Component = ({ image, ...props }) => {
  const presentationProps = usePresentation(props);

  const { caption, asset } = image;

  const { extension, metadata, path, _id: id } = asset;

  const [, projectId, dataset] = path.split('/');

  const maxWidth = Math.min(metadata.dimensions.width, 1024);

  // const fluidProps = getFluidGatsbyImage(id, { maxWidth }, { projectId, dataset });

  // const renderProps = {
  //   alt: caption,
  //   title: caption,
  //   style: {
  //     margin: 'auto',
  //     maxWidth,
  //   },
  // };

  // const imageTypeProps = {
  //   id,
  //   maxWidth,
  //   projectId,
  //   dataset,
  // };

  // if (typeof fluid === 'function') {
  //   renderProps.fluid = fluid(imageTypeProps);

  //   if (extension === 'svg') {
  //     delete renderProps.fluid.srcWebp;
  //     delete renderProps.fluid.srcSetWebp;
  //   }
  // }

  // if (typeof fixed === 'function') {
  //   renderProps.fixed = fixed(imageTypeProps);
  // }

  return (
    <Pane {...props} {...presentationProps}>
      {Component.staticConfig.render({
        alt: caption,
        title: caption,
        style: {
          margin: 'auto',
          maxWidth,
        },
        metadata: {
          id,
          maxWidth,
          extension,
          cms: {
            projectId,
            dataset,
          },
        },
      })}
      {/* <Img alt={caption} title={caption} fluid={fluidProps} style={{ margin: 'auto', maxWidth }} /> */}
    </Pane>
  );
};

Component.displayName = 'CMS.Illustration';

Component.staticConfig = {
  render: () => {
    throw new Error(`Configure "illustration.render" for the <Illustration/> component.`);
  },
};

Component.isType = type => type === 'illustration';

Component.propTypes = {
  image: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    asset: PropTypes.object.isRequired,
  }).isRequired,
};
