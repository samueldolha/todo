import PropTypes from 'prop-types';

const TodoItem = ({ value }) => (
  <li>
    {value}
  </li>
);

TodoItem.displayName = 'TodoItem';

TodoItem.propTypes = {
  value: PropTypes.string.isRequired
};

export default TodoItem;
