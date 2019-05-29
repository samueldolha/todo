import { useCallback } from "preact/hooks";
import { Map as ImmutableMap } from "immutable";
import PropTypes from "prop-types";

const TodoItem = ({ removeTodo, todo }) => (
  <span
    onClick={useCallback(
      () => {
        removeTodo(todo.get("id"));
      },
      [removeTodo, todo]
    )}
  >
    {todo.get("value")}
  </span>
);

TodoItem.displayName = "TodoItem";

TodoItem.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(ImmutableMap).isRequired
};

export default TodoItem;
