import { cleanup, render } from "preact-testing-library";
import testPropTypes from "../../test-prop-types";
import createTodo from "../../create-todo";
import TodoItem from ".";

describe("props", () => {
  const {
    expectInstanceOf,
    expectRequired,
    expectType
  } = testPropTypes(
    TodoItem,
    {
      removeTodo: () => null,
      todo: createTodo("buy groceries")
    }
  );

  describe("removeTodo", () => {
    it("is required", () => {
      expectRequired("removeTodo");
    });

    it("is a function", () => {
      expectType("removeTodo");
    });
  });

  describe("todo", () => {
    it("is required", () => {
      expectRequired("todo");
    });

    it("is an immutable todo", () => {
      expectInstanceOf("todo");
    });
  });
});

describe("behavior", () => {
  const todo = "buy groceries";

  const setUp = () => {
    const removeTodo = jest.fn();

    return {
      removeTodo,
      render: render((
        <TodoItem
          removeTodo={removeTodo}
          todo={createTodo(todo)}
        />
      ))
    };
  };

  afterEach(() => {
    cleanup();
  });

  it("displays the todo", () => {
    const { render: { queryAllByText } } = setUp();
    expect(queryAllByText(todo).length).toBe(1);
  });
});
