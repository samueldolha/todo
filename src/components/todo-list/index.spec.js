import { cleanup, render } from "preact-testing-library";
import { List as ImmutableList } from "immutable";
import testPropTypes from "../../test-prop-types";
import createTodo from "../../create-todo";
import TodoList from ".";

describe("props", () => {
  const {
    expectRequired,
    expectInstanceOf,
    expectType
  } = testPropTypes(
    TodoList,
    {
      removeTodo: () => null,
      todos: ImmutableList()
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
    const { queryAllByText } = render((
      <TodoList
        todos={ImmutableList([createTodo(firstTodo), createTodo(secondTodo)])}
      />
    ));
    expect(queryAllByText(firstTodo).length).toBe(1);
    expect(queryAllByText(secondTodo).length).toBe(1);
  });
});
