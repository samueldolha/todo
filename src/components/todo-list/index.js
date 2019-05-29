import PropTypes from "prop-types";
import { List as ImmutableList } from "immutable";
import TodoItem from "../todo-item";

const TodoList = ({ removeTodo, todos }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo}>
        <TodoItem
          removeTodo={removeTodo}
          todo={todo}
        />
      </li>
    )).toArray()}
  </ul>
);

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(ImmutableList).isRequired
};

export default TodoList;
