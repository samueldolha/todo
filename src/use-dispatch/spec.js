import { cleanup, render } from "preact-testing-library";
import { Component } from "preact";
import useDispatch from ".";

const renderHook = (dispatch, action) => {
  let error = null;

  // eslint-disable-next-line react/display-name
  const ErrorBoundary = class extends Component {
    static componentDidCatch(caughtError) {
      error = caughtError;
    }

    render() {
      if (error !== null) {
        return null;
      }

      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }
  };

  let result = null;

  const HookSpy = () => {
    result = useDispatch(dispatch, action);
  };

  render((
    <ErrorBoundary>
      <HookSpy />
    </ErrorBoundary>
  ));
  cleanup();

  if (error !== null) {
    throw error;
  }

  return result;
};

it("expects a function dispatch", () => {
  expect(() => renderHook({}, () => null)).toThrow("dispatch");
});

it("expects a function action", () => {
  expect(() => renderHook(() => null, {})).toThrow("action");
});

it("returns a function", () => {
  expect(typeof renderHook(() => null, () => null)).toBe("function");
});
