import { Fragment, h } from 'preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import PropTypes from 'prop-types';

const TodoEntry = ({ onAddTodo }) => {
  const [input, setInput] = useState('');
  const inputFieldRef = useRef(null);
  const addButtonRef = useRef(null);

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
              if (event.key === 'Enter' && addButtonRef.current !== null) {
                addButtonRef.current.click();
              }
            },
            []
          )}
          ref={inputFieldRef}
          type="text"
          value={input}
        />
      </label>
      {' '}
      <button
        disabled={input === ''}
        onClick={useCallback(
          () => {
            onAddTodo(input);
            setInput('');

            if (inputFieldRef.current !== null) {
              inputFieldRef.current.focus();
            }
          },
          [input, onAddTodo]
        )}
        ref={addButtonRef}
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
