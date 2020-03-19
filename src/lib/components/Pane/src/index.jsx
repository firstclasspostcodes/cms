import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Pane, Grid } from '@firstclasspostcodes/sw14';

import usePresentation from '../../../hooks/usePresentation';
import useLayout from '../../../hooks/useLayout';

import { Illustration } from '../../Illustration';
import { Reference } from '../../Reference';
import { Interactable } from '../../Interactable';
import { Content } from '../../Content';

const Component = props => {
  const presentationOptions = {};

  const { __typename: type } = props;

  if (type) {
    // only apply gutter if this <Pane/> component is not nested
    presentationOptions.applyGutter = true;
  }

  const { before, body } = props;

  const presentationProps = usePresentation(props, presentationOptions);

  const layoutProps = useLayout(props);

  const { gridProps, getUnitLayoutProps } = layoutProps;

  const containerComponent = ({ children, ...containerProps }, i) =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        as: Grid.Unit,
        ...getUnitLayoutProps(i),
        ...containerProps,
      })
    );

  return (
    <Pane containment="layout paint" {...presentationProps}>
      <Pane.Constrained>
        {before && <Content {...before} />}
        <Grid {...gridProps}>
          <Reference
            containerComponent={containerComponent}
            components={[Interactable, Component, Content, Illustration]}
            body={body}
          />
        </Grid>
      </Pane.Constrained>
    </Pane>
  );
};

Component.displayName = 'Pane';

Component.isType = type => type === 'pane';

Component.propTypes = {
  __typename: PropTypes.string.isRequired,
  before: PropTypes.oneOfType([PropTypes.shape(Content.propTypes), PropTypes.bool]),
  body: PropTypes.shape(Content.propTypes).isRequired,
};

Component.defaultProps = {
  before: null,
};

export default withTheme(Component);
