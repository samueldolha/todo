import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import PropTypes from 'prop-types';

const TodoEntry = ({ onAddTodo }) => {
  const [input, setInput] = useState('');

  return (
    <Fragment>
      <label>
        {'Enter a todo:'}
        {' '}
        <input
          onChange={useCallback(
            (event) => {
              setInput(event.target.value);
            },
            []
          )}
          type="text"
          value={input}
        />
      </label>
      {' '}
      <button
        onClick={useCallback(
          () => {
            onAddTodo(input);
            setInput('');
          },
          [input, onAddTodo]
        )}
        type="button"
      >
        {'Add'}
      </button>
    </Fragment>
  );
};

TodoEntry.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default TodoEntry;
