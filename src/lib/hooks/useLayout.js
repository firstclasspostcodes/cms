import { useMemo } from 'react';

const withSortedSizeProp = (props, breakpoints) => {
  const { size } = props;
  if (!size || typeof size === 'number') {
    return props;
  }
  const sorted = Object.entries(size).sort(
    ([a], [b]) => breakpoints.indexOf(a) - breakpoints.indexOf(b)
  );
  const map = sorted.reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {});
  return Object.assign(props, { size: map });
};

const getUnitLayout = ({ size = 1, ...rest }) => {
  const props = rest;

  switch (typeof size) {
    case 'number':
      props.size = size >= 1.0 ? 1 / size : size;
      break;
    case 'object':
      props.size = Object.entries(size).reduce(
        (obj, [key, val]) => ({
          ...obj,
          [key]: val >= 1.0 ? 1 / val : val,
        }),
        {}
      );
      break;
    default:
      props.size = size;
  }

  return props;
};

export default ({ properties, theme }) =>
  useMemo(() => {
    const { grid: gridProps, unit = {} } = properties || {};

    const breakpoints = Object.keys(theme.breakpoints);

    const layoutProps = {
      gridProps,
    };

    if (unit.constructor === Array) {
      layoutProps.getUnitLayoutProps = index =>
        getUnitLayout(withSortedSizeProp(unit[index], breakpoints));
    } else {
      const sortedSizeProp = withSortedSizeProp(unit, breakpoints);
      const unitProps = getUnitLayout(sortedSizeProp);
      layoutProps.getUnitLayoutProps = () => unitProps;
    }

    return layoutProps;
  }, [properties, theme.breakpoints]);
