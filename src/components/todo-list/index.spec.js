import { cleanup, render } from "preact-testing-library";
import { List as ImmutableList } from "immutable";
import testPropTypes from "../../test-prop-types";
import TodoList from ".";

describe("props", () => {
  const {
    expectRequired,
    expectInstanceOf
  } = testPropTypes(TodoList, { todos: ImmutableList() });

  describe("todos", () => {
    it("is required", () => {
      expectRequired("todos");
    });

    it("is an ImmutableList", () => {
      expectInstanceOf("todos");
    });
  });
});

describe("behavior", () => {
  afterEach(() => {
    cleanup();
  });

  it("displays the todos", () => {
    const firstTodo = "buy groceries";
    const secondTodo = "walk the dog";
    const {
      queryAllByText
    } = render(<TodoList todos={ImmutableList([firstTodo, secondTodo])} />);
    expect(queryAllByText(firstTodo).length).toBe(1);
    expect(queryAllByText(secondTodo).length).toBe(1);
  });
});
