import { cleanup, fireEvent, render } from "preact-testing-library";
import testPropTypes from "../../test-prop-types";
import TodoEntry from ".";

describe("props", () => {
  const {
    expectRequired,
    expectType
  } = testPropTypes(TodoEntry, { addTodo: () => null });

  describe("addTodo", () => {
    it("is required", () => {
      expectRequired("addTodo");
    });

    it("is a function", () => {
      expectType("addTodo");
    });
  });
});

describe("behavior", () => {
  const setUp = () => {
    const addTodo = jest.fn();

    return {
      addTodo,
      render: render(<TodoEntry addTodo={addTodo} />)
    };
  };

  afterEach(() => {
    cleanup();
  });

  it("clears its input after adding a todo", async () => {
    const {
      addTodo,
      render: { getByLabelText, queryAllByDisplayValue }
    } = setUp();
    const inputField = getByLabelText(/todo/iu);
    const value = "buy groceries";
    await fireEvent.input(inputField, { target: { value } });
    expect(queryAllByDisplayValue(value).length).toBe(1);
    await fireEvent.keyDown(inputField, { key: "Enter" });
    expect(addTodo).toBeCalledTimes(1);
    expect(queryAllByDisplayValue(value).length).toBe(0);
  });

  it("prevents adding an empty todo", async () => {
    const {
      addTodo,
      render: { getByLabelText, queryAllByDisplayValue }
    } = setUp();
    expect(queryAllByDisplayValue("").length).toBe(1);
    await fireEvent.keyDown(getByLabelText(/todo/iu), { key: "Enter" });
    expect(addTodo).toBeCalledTimes(0);
  });
});
