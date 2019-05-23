/* eslint-env jest */
import PropTypes from "prop-types";

export default (context, expecter) => (key) => {
  if (typeof key !== "string"
    || !Object.prototype.hasOwnProperty.call(context.validProps, key)) {
    throw new Error("Expected key to be a valid property");
  }

  const consoleError = jest.spyOn(console, "error").mockImplementation();
  expecter(
    {
      ...context,
      consoleError
    },
    key
  );
  PropTypes.resetWarningCache();
  consoleError.mockRestore();
};
