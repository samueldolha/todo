import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import TodoEntry from '.';

afterEach(cleanup);

it('clears its input after adding a todo', async () => {
  const {
    getByLabelText,
    getByText,
    queryByDisplayValue
  } = render(<TodoEntry onAddTodo={() => null} />);
  const value = 'buy groceries';
  await fireEvent.input(getByLabelText(/todo/iu), { target: { value } });
  expect(queryByDisplayValue(value)).not.toBeNull();
  await fireEvent.click(getByText(/add/iu));
  expect(queryByDisplayValue(value)).toBeNull();
});

it('prevents adding an empty todo', () => {
  const {
    getByText,
    queryByDisplayValue
  } = render(<TodoEntry onAddTodo={() => null} />);
  expect(queryByDisplayValue('')).not.toBeNull();
  expect(getByText(/add/iu).disabled).toBe(true);
});
