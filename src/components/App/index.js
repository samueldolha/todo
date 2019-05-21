import { Fragment } from "preact";
import { useCallback, useState } from "preact/hooks";
import { List as ImmutableList } from "immutable";
import TodoList from "../todo-list";
import TodoEntry from "../todo-entry";

const App = () => {
  const [todos, setTodos] = useState(ImmutableList());

  return (
    <Fragment>
      <header>
        <h1>
          {"Todo"}
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
        {"© 2019 Samuel Dolha"}
      </footer>
    </Fragment >
  );
};

App.displayName = "App";

export default App;
