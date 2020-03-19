import { useMemo } from 'react';

export default color => useMemo(() => {
  if (!color) {
    return null;
  }

  const { name, hue } = color;

  if (typeof hue === 'number') {
    return [name, hue];
  }

  if (!name) {
    return null;
  }

  return name;
}, [color]);