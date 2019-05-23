import { List as ImmutableList } from "immutable";

export const addTodo = (value) => {
  if (typeof value !== "string" || value === "") {
    throw new Error("Expected value to be a nonempty string");
  }

  return (todos) => {
    if (!(todos instanceof ImmutableList)) {
      throw new Error("Expected todos to be an ImmutableList");
    }

    return todos.push(value);
  };
};
