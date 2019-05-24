import { cleanup, render } from "preact-testing-library";

export default (useHook) => {
  let result = null;

  const HookSpy = () => {
    try {
      result = useHook(); // eslint-disable-line react-hooks/rules-of-hooks
    } catch (error) {
      result = error;
    }

    return null;
  };

  render(<HookSpy />);
  cleanup();

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
