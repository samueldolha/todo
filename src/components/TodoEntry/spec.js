import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import TodoEntry from '.';

const setUp = () => {
  const onAddTodo = jest.fn();

  return {
    onAddTodo,
    render: render(<TodoEntry onAddTodo={onAddTodo} />)
  };
};

afterEach(cleanup);

it('clears its input after adding a todo', async () => {
  const {
    onAddTodo,
    render: { getByLabelText, queryAllByDisplayValue }
  } = setUp();
  const inputField = getByLabelText(/todo/iu);
  const value = 'buy groceries';
  await fireEvent.input(inputField, { target: { value } });
  expect(queryAllByDisplayValue(value).length).toBe(1);
  await fireEvent.keyDown(inputField, { key: 'Enter' });
  expect(onAddTodo).toBeCalledTimes(1);
  expect(queryAllByDisplayValue(value).length).toBe(0);
});

it('prevents adding an empty todo', () => {
  const { onAddTodo, render: { queryAllByDisplayValue } } = setUp();
  expect(queryAllByDisplayValue('').length).toBe(1);
  expect(onAddTodo).toBeCalledTimes(0);
});
