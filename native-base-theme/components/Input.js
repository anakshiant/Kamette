// @flow

import variable from "./../variables/platform";

export default (variables /* : * */ = variable) => {
  const inputTheme = {
    ".multiline": {
      height: null,
    },
    height: 40,
    width: "100%",
    color: variables.inputColor,
    paddingLeft: 20,
    paddingRight: 5,
    marginBottom: 10,
    fontSize: variables.inputFontSize,
    borderRadius: 3,
    backgroundColor: "#eceff1",
  };

  return inputTheme;
};
