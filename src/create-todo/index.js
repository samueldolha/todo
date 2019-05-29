import { Map as ImmutableMap } from "immutable";

const getNextId = (() => {
  let id = -1;

  return () => {
    id += 1;

    return id;
  };
})();

export default (value) => {
  if (typeof value !== "string" || value === "") {
    throw new Error("Expected value to be a nonempty string");
  }

  return ImmutableMap({
    id: getNextId(),
    value
  });
};
