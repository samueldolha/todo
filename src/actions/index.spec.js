import { List as ImmutableList } from "immutable";
import createTodo from "../create-todo";
import { addTodo, removeTodo } from ".";

describe("addTodo", () => {
  it("expects a nonempty string value", () => {
    expect(() => {
      addTodo("");
    }).toThrow("value");
  });

  const todo = "buy groceries";
  const todos = [createTodo("walk the dog")];

  it("expects an ImmutableList", () => {
    expect(() => {
      addTodo(todo)(todos);
    }).toThrow("todos");
  });

  it("returns the todos with the value appended", () => {
    expect(addTodo(todo)(ImmutableList(todos)).get(1)
      .get("value")).toBe(todo);
  });
});

describe("removeTodo", () => {
  it("expects an nonnegative integer id", () => {
    expect(() => {
      removeTodo(Math.PI);
    }).toThrow("id");
  });

  const todo = createTodo("walk the dog");
  const todos = [createTodo("buy groceries"), todo];

  it("expects an ImmutableList", () => {
    expect(() => {
      removeTodo(0)(todos);
    }).toThrow("todos");
  });

  it("returns the todos without the todo with the id", () => {
    expect(removeTodo(todos[0].get("id"))(ImmutableList(todos)).get(0)
      .get("value")).toBe(todo.get("value"));
  });
});
