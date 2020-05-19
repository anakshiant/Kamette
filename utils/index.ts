export const COLOR = {
  PRIMARY: "#5c6bc0",
  SUCCESS: "#66bb6a",
  ERROR: "#ef5350",
  TEXT: "#78909c",
  BORDER: "#b0bec5",
  SHADOW: "#b0bec5",
};

/**
 * Shoout out to those developers who still use form data
 * @param data
 */
export const objectToFormData = (data: any): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach((entry: [string, any]) => {
    formData.append(entry[0], entry[1]);
  });
  return formData;
};
