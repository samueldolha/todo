/* eslint-env jest */
import PropTypes from "prop-types";

export default (context, key) => {
  const location = "prop";
  PropTypes.checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    context.Component.propTypes,
    {
      ...context.validProps,
      [key]: null
    },
    location,
    context.Component.displayName
  );
  expect(context.consoleError).toBeCalledWith("Warning: Failed"
    + ` ${location} type: The ${location} \`${key}\` is marked as required in`
    + ` \`${context.Component.displayName}\`, but its value is \`null\`.`);
};
