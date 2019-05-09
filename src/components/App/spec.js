import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import App from '.';

it('adds a todo to the list', () => {
  const { getByLabelText, getByText, queryByText } = render(<App />);
  const value = 'buy groceries';
  const valuePattern = new RegExp(value, 'iu');
  expect(queryByText(valuePattern)).toBeNull();
  fireEvent.change(getByLabelText(/todo/iu), { target: { value } });
  fireEvent.click(getByText(/add/iu));
  expect(queryByText(valuePattern)).not.toBeNull();
  cleanup();
});
