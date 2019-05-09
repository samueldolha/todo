import { h } from 'preact';
import PropTypes from 'prop-types';
import immutable from 'immutable';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo}>
        {todo}
      </li>
    )).toArray()}
  </ul>
);

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  todos: PropTypes.instanceOf(immutable.List).isRequired
};

export default TodoList;
