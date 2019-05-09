import { h } from 'preact';
import { cleanup, render } from 'preact-testing-library';
import immutable from 'immutable';
import TodoList from '.';

afterEach(cleanup);

it('displays the todos', () => {
  const firstTodo = 'buy groceries';
  const secondTodo = 'walk the dog';
  const {
    queryByText
  } = render(<TodoList todos={immutable.List([firstTodo, secondTodo])} />);
  expect(queryByText(firstTodo)).not.toBeNull();
  expect(queryByText(secondTodo)).not.toBeNull();
});
