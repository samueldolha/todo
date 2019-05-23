/* eslint-env jest */
import PropTypes from "prop-types";

export default (context, key) => {
  const location = "prop";
  PropTypes.checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    context.Component.propTypes,
    {
      ...context.validProps,
      [key]: Symbol(key)
    },
    location,
    context.Component.displayName
  );
  expect(context.consoleError).toBeCalledWith("Warning: Failed"
    + ` ${location} type:`
    + ` Invalid ${location} \`${key}\` of type \`symbol\` supplied to`
    + ` \`${context.Component.displayName}\`,`
    + ` expected \`${typeof context.validProps[key]}\`.`);
};
