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
          autoFocus
          onInput={useCallback(
            (event) => {
              setInput(event.target.value);
            },
            []
          )}
          onKeyDown={useCallback(
            (event) => {
              if (event.key === 'Enter' && input !== '') {
                onAddTodo(input);
                setInput('');
              }
            },
            [input, onAddTodo]
          )}
          type="text"
          value={input}
        />
      </label>
    </Fragment>
  );
};

TodoEntry.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default TodoEntry;
