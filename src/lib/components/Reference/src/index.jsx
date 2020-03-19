import React from 'react';
import PropTypes from 'prop-types';
import { Pane, Typography } from '@firstclasspostcodes/sw14';

export const Component = class extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  static findType(type, Reference) {
    return Reference.find(ref => {
      if (typeof ref.isType !== 'function') {
        throw new Error(`${ref.type} does not define #isType()`);
      }
      return ref.isType(type);
    });
  }

  static renderError() {
    return (
      <Pane background="black" color="white" spacing={{ p: 4 }}>
        <Typography.H3>Error Boundary Encountered</Typography.H3>
        <Typography.P>An error occurred rendering this component.</Typography.P>
      </Pane>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return Component.renderError();
    }

    const { containerComponent, components, body = [] } = this.props;

    return body.filter(Boolean).map(({ _id: id, _type: type, ...props }, i) => {
      const componentKey = id || `${type}-${i}`;
      const Reference = Component.findType(type, components);
      if (!Reference) {
        console.warn(`Content type "${type}" is unrecognised.`);
        return null;
      }
      const reference = <Reference key={componentKey} {...props} />;
      if (typeof containerComponent !== 'function') {
        return reference;
      }
      return containerComponent({ key: componentKey, children: reference }, i);
    });
  }
};

Component.propTypes = {
  containerComponent: PropTypes.func.isRequired,
  components: PropTypes.arrayOf(PropTypes.element).isRequired,
  body: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
