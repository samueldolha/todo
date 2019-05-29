import { List as ImmutableList } from "immutable";
import createTodo from "../create-todo";

export const addTodo = (value) => {
  if (typeof value !== "string" || value === "") {
    throw new Error("Expected value to be a nonempty string");
  }

  return (todos) => {
    if (!(todos instanceof ImmutableList)) {
      throw new Error("Expected todos to be an ImmutableList");
    }

    return todos.push(createTodo(value));
  };
};

export const removeTodo = (id) => {
  if (!Number.isInteger(id) || id < 0) {
    throw new Error("Expected id to be a nonnegative integer");
  }

  return (todos) => {
    if (!(todos instanceof ImmutableList)) {
      throw new Error("Expected todos to be an ImmutableList");
    }

    return todos.delete(todos.findIndex((todo) => todo.get("id") === id));
  };
};
