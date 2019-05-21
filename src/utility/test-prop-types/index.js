import PropTypes from "prop-types";

const location = "prop";

const createExpecter = (context, expecter) => (key) => {
  if (typeof key !== "string"
    || !Object.prototype.hasOwnProperty.call(context.validProps, key)) {
    throw new Error("Expected \"key\" to be a valid property");
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

const expectRequired = (context, key) => {
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

const expectType = (context, key) => {
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

const expectInstanceOf = (context, key) => {
  const Placeholder = () => null;
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

export default (Component, validProps) => {
  if (typeof Component !== "function") {
    throw new Error("Expected Component to be a function");
  }

  if (typeof Component.displayName !== "string"
    || Component.displayName === "") {
    throw new Error("Expected Component.displayName to be a nonempty string");
  }

  // eslint-disable-next-line react/forbid-foreign-prop-types
  if (typeof Component.propTypes !== "object" || Component.propTypes === null) {
    throw new Error("Expected \"Component.propTypes\" to be a nonnull object");
  }

  if (typeof validProps !== "object" || validProps === null) {
    throw new Error("Expected validProps to be a nonnull object");
  }

  const context = {
    Component,
    validProps
  };

  return {
    expectInstanceOf: createExpecter(context, expectInstanceOf),
    expectRequired: createExpecter(context, expectRequired),
    expectType: createExpecter(context, expectType)
  };
};
