import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import immutable from 'immutable';

const App = () => {
  const [todos] = useState(immutable.List());

  return (
    <Fragment>
      <header>
        <h1>
          {'Todo'}
        </h1>
      </header>
      <main>
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
