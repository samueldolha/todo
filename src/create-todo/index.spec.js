import createTodo from ".";

it("expects a nonempty string value", () => {
  expect(() => {
    createTodo("");
  }).toThrow("value");
});

describe("output", () => {
  const value = "buy groceries";
  const firstTodo = createTodo(value);

  it("has a unique id", () => {
    const secondTodo = createTodo(value);
    expect(firstTodo.get("id")).not.toBe(secondTodo.get("id"));
  });

  it("has the value", () => {
    expect(firstTodo.get("value")).toBe(value);
  });
});
