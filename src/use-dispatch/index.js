import { useCallback } from "preact/hooks";

export default (dispatch, action) => useCallback(
  (...parameters) => {
    dispatch(action(parameters));
  },
  [dispatch, action]
);
