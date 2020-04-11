import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import TodoListRedux from "../../todo-list-redux";

import { Creators as TodosActions } from "../../store/ducks/todos";

const mockStore = createStore();
const INITIAL_STATE = {
  todos: { data: ["fazer café", "estudar react"] },
};
const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoListRedux />
    </Provider>
  );

  expect(wrapper.find("li").length).toBe(2);
});

it("should be able to add new todos", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoListRedux />
    </Provider>
  );

  wrapper.find("TodoListRedux").setState({ newTodo: "novo todo" });
  wrapper.find("button").simulate("click");

  expect(store.getActions()).toContainEqual(TodosActions.addTodo("novo todo"));
});
