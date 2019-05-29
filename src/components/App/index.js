import { Fragment } from "preact";
import { useReducer } from "preact/hooks";
import { List as ImmutableList } from "immutable";
import { addTodo, removeTodo } from "../../actions";
import useDispatch from "../../use-dispatch";
import TodoList from "../todo-list";
import TodoEntry from "../todo-entry";

const App = () => {
  const [todos, dispatch] = useReducer(
    (state, action) => action(state),
    ImmutableList()
  );

  return (
    <Fragment>
      <header>
        <h1>
          {"Todo"}
        </h1>
      </header>
      <main>
        <TodoEntry addTodo={useDispatch(dispatch, addTodo)} />
        <TodoList
          removeTodo={useDispatch(dispatch, removeTodo)}
          todos={todos}
        />
      </main>
      <footer>
        {"© 2019 Samuel Dolha"}
      </footer>
    </Fragment>
  );
};

App.displayName = "App";

App.propTypes = {};

export default App;
