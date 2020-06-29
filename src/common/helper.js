export function getValidationErrors(err) {
  const validationErrors = err.inner.reduce((x, y) => {
    x[y.path] = y.message;
    return x;
  }, {});
  return validationErrors;
}

export function getServiceId() {
  return SERVICE_ID || process.env.SERVICE_ID;
}

export function getTemplateId() {
  return TEMPLATE_ID || process.env.TEMPLATE_ID;
}

export function getUserId() {
  return USER_ID || process.env.USER_ID;
}
