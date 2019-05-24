import renderHook from "../render-hook";
import useDispatch from ".";

it("expects a function dispatch", () => {
  expect(() => renderHook(() => useDispatch({}, () => null)))
    .toThrow("dispatch");
});

it("expects a function action", () => {
  expect(() => renderHook(() => useDispatch(() => null, {})))
    .toThrow("action");
});

it("returns a function", () => {
  expect(typeof renderHook(() => useDispatch(() => null, () => null)))
    .toBe("function");
});
