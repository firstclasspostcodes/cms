import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

export const Component = ({ image, ...props }) => {
  const presentationProps = usePresentation(props);

  const { caption, asset } = image;

  const { extension, metadata, path, _id: id } = asset;

  const [, projectId, dataset] = path.split('/');

  const maxWidth = Math.min(metadata.dimensions.width, 1024);

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
    caption: PropTypes.string,
    asset: PropTypes.object.isRequired,
  }).isRequired,
};
