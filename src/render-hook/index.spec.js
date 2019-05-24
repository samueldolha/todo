import { useState } from "preact/hooks";
import renderHook from ".";

it("expects a function useHook", () => {
  expect(() => {
    renderHook({});
  }).toThrow("useHook");
});

it("throws the error the hook throws", () => {
  const error = new Error("foo");
  expect(() => {
    renderHook(() => useState(() => {
      throw error;
    }));
  }).toThrow(error);
});

it("returns the result of the hook", () => {
  const result = "foo";
  const [foo, setFoo] = renderHook(() => useState(result));
  expect(foo).toBe(result);
  expect(typeof setFoo).toBe("function");
});
