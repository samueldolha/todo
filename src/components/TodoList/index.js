import PropTypes from 'prop-types';
import immutable from 'immutable';
import TodoItem from '../TodoItem';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo}
        value={todo}
      />
    )).toArray()}
  </ul>
);

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  todos: PropTypes.instanceOf(immutable.List).isRequired
};

export default TodoList;
