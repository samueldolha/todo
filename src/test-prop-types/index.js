import createExpecter from "./create-expecter";
import expectRequired from "./expect-required";
import expectType from "./expect-type";
import expectInstanceOf from "./expect-instance-of";

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
    throw new Error("Expected Component.propTypes to be a nonnull object");
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
