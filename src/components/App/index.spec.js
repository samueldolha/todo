import { cleanup, fireEvent, render } from "preact-testing-library";
import App from ".";

const setUp = () => render(<App />);

afterEach(() => {
  cleanup();
});

const todo = "buy groceries";

it("adds a todo to the list", async () => {
  const { getByLabelText, queryAllByText } = setUp();
  expect(queryAllByText(todo).length).toBe(0);
  const inputField = getByLabelText(/todo/iu);
  await fireEvent.input(inputField, { target: { value: todo } });
  await fireEvent.keyDown(inputField, { key: "Enter" });
  expect(queryAllByText(todo).length).toBe(1);
});

it("removes a todo from the list", async () => {
  const { getByText, getByLabelText, queryAllByText } = setUp();
  const inputField = getByLabelText(/todo/iu);
  await fireEvent.input(inputField, { target: { value: todo } });
  await fireEvent.keyDown(inputField, { key: "Enter" });
  expect(queryAllByText(todo).length).toBe(1);
  await fireEvent.click(getByText(todo));
  expect(queryAllByText(todo).length).toBe(0);
});
