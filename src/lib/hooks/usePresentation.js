import useColor from './useColor';

export default (props = {}, options = {}) => {
  const presentationProps = {};

  if (props.spacing) {
    presentationProps.spacing = props.spacing;
  }

  if (!props.visible && props.visibility !== null) {
    presentationProps.visible = props.visibility;
  }

  if (options.applyGutter) {
    if (!props.theme) {
      throw new Error(`applyGutter was set but no theme was passed in.`);
    }
    presentationProps.spacing = {
      ...presentationProps.spacing,
      px: props.theme.constants.GUTTER,
    };
  }

  ['border', 'background', 'color'].forEach(key => {
    if (!props[key]) {
      return null;
    }
    const color = useColor(props[key]);

    if (color) {
      presentationProps[key] = color;
    }

    return null;
  });

  return presentationProps;
};
