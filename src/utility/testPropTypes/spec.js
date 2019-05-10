import PropTypes from 'prop-types';
import testPropTypes from '.';

const displayName = 'Foo';

describe('parameters', () => {
  const propTypes = {};
  const Component = () => null;
  Component.displayName = displayName;
  Component.propTypes = propTypes;
  const validProps = {};

  describe('Component', () => {
    it('is a function', () => {
      expect(() => {
        testPropTypes(
          {
            displayName,
            propTypes
          },
          validProps
        );
      }).toThrow('Component');
    });

    it('has a nonempty string displayName', () => {
      const NamelessComponent = () => null;
      NamelessComponent.displayName = '';
      NamelessComponent.propTypes = propTypes;
      expect(() => {
        testPropTypes(NamelessComponent, validProps);
      }).toThrow('displayName');
    });

    it('has an object propTypes', () => {
      const TypelessComponent = () => null;
      TypelessComponent.displayName = displayName;
      TypelessComponent.propTypes = null;
      expect(() => {
        testPropTypes(TypelessComponent, validProps);
      }).toThrow('propTypes');
    });
  });

  describe('validProps', () => {
    it('is an object', () => {
      expect(() => {
        testPropTypes(Component, null);
      }).toThrow('validProps');
    });
  });
});

describe('expectRequired', () => {
  const optionalProp = 'bar';
  const requiredProp = 'baz';
  const Component = () => null;
  Component.displayName = displayName;
  Component.propTypes = {
    [optionalProp]: PropTypes.string,
    [requiredProp]: PropTypes.string.isRequired
  };
  const { expectRequired } = testPropTypes(
    Component,
    {
      [optionalProp]: null,
      [requiredProp]: 'baz'
    }
  );

  it('fails on an optional property', () => {
    expect(() => {
      expectRequired(optionalProp);
    }).toThrow();
  });

  it('succeeds on a required property', () => {
    expect(() => {
      expectRequired(requiredProp);
    }).not.toThrow();
  });
});

describe('expectType', () => {
  const invalidProp = 'bar';
  const validProp = 'baz';
  const Component = () => null;
  Component.displayName = displayName;
  Component.propTypes = {
    [invalidProp]: PropTypes.string,
    [validProp]: PropTypes.number
  };
  const { expectType } = testPropTypes(
    Component,
    {
      [invalidProp]: 0,
      [validProp]: 0
    }
  );

  it('fails on a mismatched type', () => {
    expect(() => {
      expectType(invalidProp);
    }).toThrow();
  });

  it('succeeds on a matching type', () => {
    expect(() => {
      expectType(validProp);
    }).not.toThrow();
  });
});

describe('expectInstanceOf', () => {
  const Valid = () => null;
  const Invalid = () => null;
  const invalidProp = 'bar';
  const validProp = 'baz';
  const Component = () => null;
  Component.displayName = displayName;
  Component.propTypes = {
    [invalidProp]: PropTypes.instanceOf(Invalid),
    [validProp]: PropTypes.instanceOf(Valid)
  };
  const { expectInstanceOf } = testPropTypes(
    Component,
    {
      [invalidProp]: new Valid(),
      [validProp]: new Valid()
    }
  );

  it('fails on a mismatched constructor', () => {
    expect(() => {
      expectInstanceOf(invalidProp);
    }).toThrow();
  });

  it('succeeds on a matching constructor', () => {
    expect(() => {
      expectInstanceOf(validProp);
    }).not.toThrow();
  });
});
