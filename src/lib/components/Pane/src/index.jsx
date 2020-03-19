import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import { Pane, Grid } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';
import useLayout from '../../../hooks/useLayout';

import { Illustration } from '../../Illustration';
import { Reference } from '../../Reference';
import { Interactable } from '../../Interactable';
import { Content } from '../../Content';

const Component = ({ presentationOptions = {}, ...props}) => {
  // const presentationOptions = {};

  // if (props.__typename) {
  //   // only apply gutter if this <Pane/> component is not nested
  //   presentationOptions.applyGutter = true;
  // }

  const presentationProps = usePresentation(props, presentationOptions);

  const layoutProps = useLayout(props);

  const { gridProps, getUnitLayoutProps } = layoutProps;

  const containerComponent = ({ children, ...containerProps }, i) => (
    React.Children.map(children, (child) => (
      React.cloneElement(child, {
        as: Grid.Unit,
        ...getUnitLayoutProps(i),
        ...containerProps,
      })
    ))
  );

  return (
    <Pane containment="layout paint" {...presentationProps}>
      <Pane.Constrained>
        {props.before && <Content {...props.before} />}
        <Grid {...gridProps}>
          <Reference
            containerComponent={containerComponent} 
            components={[Interactable, Component, Content, Illustration]} 
            body={props.body} 
          />
        </Grid>
      </Pane.Constrained>
    </Pane>
    
  );
};

Component.displayName = 'Pane';

Component.isType = (type) => type === 'pane';

export default withTheme(Component);