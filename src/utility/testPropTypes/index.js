import PropTypes from 'prop-types';

const location = 'prop';

const expectRequired = (Component, validProps) => (key) => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation();
  PropTypes.checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    Component.propTypes,
    {
      ...validProps,
      [key]: null
    },
    location,
    Component.displayName
  );
  expect(consoleError).toBeCalledWith(`Warning: Failed ${location} type:`
    + ` The ${location} \`${key}\` is marked as required in`
    + ` \`${Component.displayName}\`, but its value is \`null\`.`);
  PropTypes.resetWarningCache();
  consoleError.mockRestore();
};

const expectType = (Component, validProps) => (key) => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation();
  PropTypes.checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    Component.propTypes,
    {
      ...validProps,
      [key]: Symbol(key)
    },
    location,
    Component.displayName
  );
  expect(consoleError).toBeCalledWith(`Warning: Failed ${location} type:`
    + ` Invalid ${location} \`${key}\` of type \`symbol\` supplied to`
    + ` \`${Component.displayName}\`, expected \`${typeof validProps[key]}\`.`);
  PropTypes.resetWarningCache();
  consoleError.mockRestore();
};

const expectInstanceOf = (Component, validProps) => (key) => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation();
  const Placeholder = () => null;
  PropTypes.checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    Component.propTypes,
    {
      ...validProps,
      [key]: new Placeholder()
    },
    location,
    Component.displayName
  );
  expect(consoleError).toBeCalledWith(`Warning: Failed ${location} type:`
    + ` Invalid ${location} \`${key}\` of type \`${Placeholder.name}\``
    + ` supplied to \`${Component.displayName}\`,`
    + ` expected instance of \`${validProps[key].constructor.name}\`.`);
  PropTypes.resetWarningCache();
  consoleError.mockRestore();
};

export default (Component, validProps) => {
  if (typeof Component !== 'function') {
    throw new Error('Expected "Component" to be a function');
  }

  if (typeof Component.displayName !== 'string'
    || Component.displayName === '') {
    throw new Error('Expected "Component.displayName" to be a nonempty string');
  }

  // eslint-disable-next-line react/forbid-foreign-prop-types
  if (typeof Component.propTypes !== 'object' || Component.propTypes === null) {
    throw new Error('Expected "Component.propTypes" to be a nonnull object');
  }

  if (typeof validProps !== 'object' || validProps === null) {
    throw new Error('Expected "validProps" to be a nonnull object');
  }

  return {
    expectInstanceOf: expectInstanceOf(Component, validProps),
    expectRequired: expectRequired(Component, validProps),
    expectType: expectType(Component, validProps)
  };
};
