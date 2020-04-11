import todosReducers, {
  Creators as TodosActions,
} from "../../store/ducks/todos";

describe("Todos Reducers", () => {
  it("should be able to add todos", () => {
    const state = todosReducers(
      { data: [] },
      TodosActions.addTodo("novo todo")
    );

    expect(state.data[0]).toBe("novo todo");
  });

  it("should be able to complete todos", () => {
    const state = todosReducers(
      { data: ["novo todo"] },
      TodosActions.completeTodo("novo todo")
    );

    expect(state.data.length).toBe(0);
  });
});
