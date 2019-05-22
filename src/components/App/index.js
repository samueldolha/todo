import { Fragment } from "preact";
import { useReducer } from "preact/hooks";
import { List as ImmutableList } from "immutable";
import { actionCreators, reducer, useDispatch } from "../../state";
import TodoList from "../todo-list";
import TodoEntry from "../todo-entry";

const App = () => {
  const [todos, dispatch] = useReducer(reducer, ImmutableList());

  return (
    <Fragment>
      <header>
        <h1>
          {"Todo"}
        </h1>
      </header>
      <main>
        <TodoEntry onAddTodo={useDispatch(dispatch, actionCreators.addTodo)} />
        <TodoList todos={todos} />
      </main>
      <footer>
        {"© 2019 Samuel Dolha"}
      </footer>
    </Fragment >
  );
};

App.displayName = "App";

App.propTypes = {};

export default App;
