import { useCallback } from "preact/hooks";

export default (dispatch, action) => {
  if (typeof dispatch !== "function") {
    throw new Error("Expected dispatch to be a function");
  }

  if (typeof action !== "function") {
    throw new Error("Expected action to be a function");
  }

  return useCallback(
    (...parameters) => {
      dispatch(action(...parameters));
    },
    [dispatch, action]
  );
};
