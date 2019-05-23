/* eslint-env jest */
import PropTypes from "prop-types";

export default (context, key) => {
  const Placeholder = () => null;
  const location = "prop";
  PropTypes.checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    context.Component.propTypes,
    {
      ...context.validProps,
      [key]: new Placeholder()
    },
    location,
    context.Component.displayName
  );
  expect(context.consoleError).toBeCalledWith("Warning: Failed"
    + ` ${location} type:`
    + ` Invalid ${location} \`${key}\` of type \`${Placeholder.name}\``
    + ` supplied to \`${context.Component.displayName}\`,`
    + ` expected instance of \`${context.validProps[key].constructor.name}\`.`);
};
