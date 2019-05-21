import PropTypes from 'prop-types';
import { List as ImmutableList } from 'immutable';
import TodoItem from '../todo-item';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo}>
        <TodoItem value={todo} />
      </li>
    )).toArray()}
  </ul>
);

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  todos: PropTypes.instanceOf(ImmutableList).isRequired
};

export default TodoList;
