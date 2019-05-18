import PropTypes from 'prop-types';

const TodoItem = ({ value }) => value;

TodoItem.displayName = 'TodoItem';

TodoItem.propTypes = {
  value: PropTypes.string.isRequired
};

export default TodoItem;
