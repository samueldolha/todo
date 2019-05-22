import { useCallback } from "preact/hooks";

export default (dispatch, actionCreator) => useCallback(
  (...parameters) => {
    dispatch(actionCreator(parameters));
  },
  [dispatch, actionCreator]
);
