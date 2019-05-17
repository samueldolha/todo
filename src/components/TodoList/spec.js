import { cleanup, render } from 'preact-testing-library';
import immutable from 'immutable';
import testPropTypes from '../../utility/testPropTypes';
import TodoList from '.';

describe('props', () => {
  const {
    expectRequired,
    expectInstanceOf
  } = testPropTypes(TodoList, { todos: immutable.List() });

  describe('todos', () => {
    it('is required', () => {
      expectRequired('todos');
    });

    it('is an Immutable.js List', () => {
      expectInstanceOf('todos');
    });
  });
});

describe('behavior', () => {
  afterEach(() => {
    cleanup();
  });

  it('displays the todos', () => {
    const firstTodo = 'buy groceries';
    const secondTodo = 'walk the dog';
    const {
      queryAllByText
    } = render(<TodoList todos={immutable.List([firstTodo, secondTodo])} />);
    expect(queryAllByText(firstTodo).length).toBe(1);
    expect(queryAllByText(secondTodo).length).toBe(1);
  });
});
