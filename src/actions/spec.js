import { List as ImmutableList } from "immutable";
import { addTodo } from ".";

it("expects a nonempty string value", () => {
  expect(() => {
    addTodo("");
  }).toThrow("value");
});

const todo = "buy groceries";
const todos = ["walk the dog"];

it("expects an ImmutableList", () => {
  expect(() => {
    addTodo(todo)(todos);
  }).toThrow("todos");
});

it("returns the todos with the value appended", () => {
  expect(addTodo(todo)(ImmutableList(todos)).get(1)).toBe(todo);
});
