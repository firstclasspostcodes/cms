import React from 'react';
import { Pane, Typography } from '@firstclasspostcodes/sw14';

export const Component = class extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  findType(type) {
    return Component => {
      if (typeof Component.isType !== 'function') {
        throw new Error(`${Component.type} does not define #isType()`);
      }
      return Component.isType(type);
    }
  }

  renderError() {
    return (
      <Pane background="black" color="white" spacing={{ p: 4 }}>
        <Typography.H3>Error Boundary Encountered</Typography.H3>
        <Typography.P>An error occurred rendering this component.</Typography.P>
      </Pane>
    );
  }

  render() {
    if (this.state && this.state.hasError) {
      return this.renderError();
    }

    const { containerComponent, components, body = [] } = this.props;

    return body.filter(Boolean).map(({ _id: id, _type: type, ...props }, i) => {
      const componentKey = id || `${type}-${i}`;
      const Component = components.find(this.findType(type));
      if (!Component) {
        console.warn(`Content type "${type}" is unrecognised.`);
        return null;
      }
      const reference = <Component key={componentKey} {...props}/>;
      if (typeof containerComponent !== 'function') {
        return reference;
      }
      return containerComponent({ key: componentKey, children: reference }, i);
    });
  }
};