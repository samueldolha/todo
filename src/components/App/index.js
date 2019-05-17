import { Fragment } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import immutable from 'immutable';
import TodoList from '../TodoList';
import TodoEntry from '../TodoEntry';

const App = () => {
  const [todos, setTodos] = useState(immutable.List());

  return (
    <Fragment>
      <header>
        <h1>
          {'Todo'}
        </h1>
      </header>
      <main>
        <TodoEntry
          onAddTodo={useCallback(
            (input) => {
              setTodos(todos.push(input));
            },
            [todos]
          )}
        />
        <TodoList todos={todos} />
      </main>
      <footer>
        {'© 2019 Samuel Dolha'}
      </footer>
    </Fragment >
  );
};

App.displayName = 'App';

export default App;
