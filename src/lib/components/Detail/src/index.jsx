import React from 'react';
import { Detail } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

import { Content } from '../../Content';

export const Component = ({ content, summary, ...props }) => {
  const presentationProps = usePresentation(props);

  return (
    <Detail {...presentationProps}>
      <Content as={Detail.Summary} content={summary} />
      <Content as={Detail.Content} content={content} />
    </Detail>
  );
};
