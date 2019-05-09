import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import TodoEntry from '.';

const setUp = () => {
  const spy = jest.fn();

  return {
    render: render(<TodoEntry onAddTodo={spy} />),
    spy
  };
};

afterEach(cleanup);

it('clears its input after adding a todo', async () => {
  const { render: { getByLabelText, queryAllByDisplayValue }, spy } = setUp();
  const inputField = getByLabelText(/todo/iu);
  const value = 'buy groceries';
  await fireEvent.input(inputField, { target: { value } });
  expect(queryAllByDisplayValue(value).length).toBe(1);
  await fireEvent.keyDown(inputField, { key: 'Enter' });
  expect(spy).toBeCalledTimes(1);
  expect(queryAllByDisplayValue(value).length).toBe(0);
});

it('prevents adding an empty todo', () => {
  const { render: { queryAllByDisplayValue }, spy } = setUp();
  expect(queryAllByDisplayValue('').length).toBe(1);
  expect(spy).toBeCalledTimes(0);
});
