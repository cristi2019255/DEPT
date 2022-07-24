const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validForm = (errors: { [s: string]: string }) => {
  let valid = true;
  Object.values(errors).forEach((val: string) => {
    return val.length > 0 && (valid = false);
  });
  return valid;
};

export { validEmailRegex, validForm };
