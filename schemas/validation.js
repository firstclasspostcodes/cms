
import Ajv from 'ajv';

export default schema => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  
  return obj => {
    if (!obj) {
      return true;
    }
    const valid = validate(obj);
    if (valid) {
      return valid;
    }
    const message = validate.errors.map(({ dataPath, message }) => `${dataPath} ${message}`).join('\n');
    return message;
  }
};