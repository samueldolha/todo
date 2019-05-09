import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import App from '.';

afterEach(cleanup);

it('adds a todo to the list', async () => {
  const { getByLabelText, queryByText } = render(<App />);
  const value = 'buy groceries';
  expect(queryByText(value)).toBeNull();
  await fireEvent.input(getByLabelText(/todo/iu), { target: { value } });
  await fireEvent.keyDown(getByLabelText(/todo/iu), { key: 'Enter' });
  expect(queryByText(value)).not.toBeNull();
});
