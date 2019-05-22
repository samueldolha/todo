import actionTypes from "./action-types";

export default (todos, action) => {
  if (action.type === actionTypes.addTodo) {
    return todos.push(action.payload);
  }

  return todos;
};
