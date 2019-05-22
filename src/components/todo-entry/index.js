import { useCallback, useState } from "preact/hooks";
import PropTypes from "prop-types";

const TodoEntry = ({ addTodo }) => {
  const [input, setInput] = useState("");

  return (
    <label>
      {"Enter a todo:"}
      {" "}
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
            if (event.key === "Enter" && input !== "") {
              addTodo(input);
              setInput("");
            }
          },
          [input, addTodo]
        )}
        type="text"
        value={input}
      />
    </label>
  );
};

TodoEntry.displayName = "TodoEntry";

TodoEntry.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoEntry;
