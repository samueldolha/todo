import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import TodoEntry from '.';

afterEach(cleanup);

it('clears its input after adding a todo', async () => {
  const spy = jest.fn();
  const {
    getByLabelText,
    queryByDisplayValue
  } = render(<TodoEntry onAddTodo={spy} />);
  const value = 'buy groceries';
  await fireEvent.input(getByLabelText(/todo/iu), { target: { value } });
  expect(queryByDisplayValue(value)).not.toBeNull();
  await fireEvent.keyDown(getByLabelText(/todo/iu), { key: 'Enter' });
  expect(spy).toBeCalled();
  expect(queryByDisplayValue(value)).toBeNull();
});

it('prevents adding an empty todo', () => {
  const spy = jest.fn();
  const { queryByDisplayValue } = render(<TodoEntry onAddTodo={spy} />);
  expect(queryByDisplayValue('')).not.toBeNull();
  expect(spy).not.toBeCalled();
});
