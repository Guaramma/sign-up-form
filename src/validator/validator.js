export const required = value => {
  if (!value) return " is required";
  return undefined;
};

export const emailValid = value => {
  let re = /\S+@\S+\.\S+/;
  if (!re.test(value)) return " pass valid email";
  return undefined;
};

export const dataCheckerCreator = (dataMin, dataMax) => (value, allValues) => {
  if (value < dataMin || value > dataMax) return "Error";
  return undefined;
};

export const yearChecker = value => {
  if (2020 - parseInt(value) < 18) return "ERROR!!!";

  return undefined;
};

export const minLengthCreator = minLength => value => {
  if (value.length < minLength) return " Password shold be more than 6";

  return undefined;
};

export const passConf = (value, allValues) => {
  if (value !== allValues.password) return " Paswords do not match";

  return undefined;
};

export const validate = (value, allValues) => {
  const errors = {};

  if (!value.gender) {
    errors.gender = "Required";
  }

  return errors;
};
