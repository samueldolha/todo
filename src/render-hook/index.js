import { cleanup, render } from "preact-testing-library";

export default (useHook) => {
  if (typeof useHook !== "function") {
    throw new Error("Expected useHook to be a function");
  }

  let result = null;

  const HookSpy = () => {
    result = useHook();
  };

  render(<HookSpy />);
  cleanup();

  return result;
};
