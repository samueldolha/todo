import actionTypes from "./action-types";

export default {
  addTodo: (value) => ({
    payload: value,
    type: actionTypes.addTodo
  })
};
