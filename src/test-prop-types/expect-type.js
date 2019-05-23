/* eslint-env jest */
import PropTypes from "prop-types";

export default (context, key) => {
  const location = "prop";
  const value = Symbol(key);
  PropTypes.checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    context.Component.propTypes,
    {
      ...context.validProps,
      [key]: value
    },
    location,
    context.Component.displayName
  );
  expect(context.consoleError).toBeCalledWith("Warning: Failed"
    + ` ${location} type:`
    + ` Invalid ${location} \`${key}\` of type \`${typeof value}\` supplied to`
    + ` \`${context.Component.displayName}\`,`
    + ` expected \`${typeof context.validProps[key]}\`.`);
};
