import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import App from '.';

afterEach(() => {
  cleanup();
});

it('adds a todo to the list', async () => {
  const { getByLabelText, queryAllByText } = render(<App />);
  const value = 'buy groceries';
  expect(queryAllByText(value).length).toBe(0);
  const inputField = getByLabelText(/todo/iu);
  await fireEvent.input(inputField, { target: { value } });
  await fireEvent.keyDown(inputField, { key: 'Enter' });
  expect(queryAllByText(value).length).toBe(1);
});
