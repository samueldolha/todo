import { h } from 'preact';
import { cleanup, fireEvent, render } from 'preact-testing-library';
import App from '.';

afterEach(cleanup);

it('adds a todo to the list', async () => {
  const { getByLabelText, queryAllByText } = render(<App />);
  const value = 'buy groceries';
  expect(queryAllByText(value).length).toBe(0);
  await fireEvent.input(getByLabelText(/todo/iu), { target: { value } });
  await fireEvent.keyDown(getByLabelText(/todo/iu), { key: 'Enter' });
  expect(queryAllByText(value).length).toBe(1);
});
