import PropTypes from 'prop-types';
import immutable from 'immutable';
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
  todos: PropTypes.instanceOf(immutable.List).isRequired
};

export default TodoList;
