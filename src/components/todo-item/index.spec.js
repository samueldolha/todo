import { cleanup, render } from "preact-testing-library";
import testPropTypes from "../../test-prop-types";
import TodoItem from ".";

describe("props", () => {
  const {
    expectRequired,
    expectType
  } = testPropTypes(TodoItem, { value: "buy groceries" });

  describe("value", () => {
    it("is required", () => {
      expectRequired("value");
    });

    it("is a string", () => {
      expectType("value");
    });
  });
});

describe("behavior", () => {
  afterEach(() => {
    cleanup();
  });

  it("displays the todo", () => {
    const value = "buy groceries";
    const { queryAllByText } = render(<TodoItem value={value} />);
    expect(queryAllByText(value).length).toBe(1);
  });
});