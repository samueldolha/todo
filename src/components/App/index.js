import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import immutable from 'immutable';

const App = () => {
  const [todos, setTodos] = useState(immutable.List());
  const [input, setInput] = useState('');

  return (
    <Fragment>
      <header>
        <h1>
          {'Todo'}
        </h1>
      </header>
      <main>
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
              setTodos(todos.push(input));
            },
            [input, todos]
          )}
          type="button"
        >
          {'Add'}
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>
              {todo}
            </li>
          )).toArray()}
        </ul>
      </main>
      <footer>
        {'© 2019 Samuel Dolha'}
      </footer>
    </Fragment>
  );
};

export default App;
