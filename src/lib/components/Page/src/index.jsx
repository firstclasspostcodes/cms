import React from 'react';
import { Theme } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';

import Reference from '../../Reference';
import Content from '../../Content';
import Pane from '../../Pane';
import Layout from '../../Layout';

export const Component = ({ body, ...props }) => {
  const presentationProps = usePresentation({ ...props, theme: Theme });
  const bodyComponents = body.filter(Boolean);
  return (
    <Layout contentProps={presentationProps}>
      <Reference components={[Content, Pane]} body={bodyComponents} />
    </Layout>
  );
};
