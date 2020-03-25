export default color => {
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
};
