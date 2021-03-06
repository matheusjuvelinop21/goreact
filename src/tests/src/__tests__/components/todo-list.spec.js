import React from "react";
import { mount } from "enzyme";

import TodoList from "../../todo-list";

it("should render the list, input and button", () => {
  const wrapper = mount(<TodoList />);

  expect(wrapper.find("ul").exists()).toBe(true);
  expect(wrapper.find("input[name='todo']").exists()).toBe(true);
  expect(wrapper.find("button").exists()).toBe(true);
});

it("should be able to add new todo", () => {
  const wrapper = mount(<TodoList />);

  wrapper.find("input[name='todo']").simulate("change", {
    target: { value: "novo todo" },
  });

  wrapper.find("button").simulate("click");

  expect(wrapper.find("ul").contains(<li>novo todo</li>)).toBe(true);
});

it("should add new todos to local storage", () => {
  global.localStorage.__proto__.getItem = jest.fn().mockReturnValue("[]");

  const setItemMock = jest.fn();
  global.localStorage.__proto__.setItem = setItemMock;

  const wrapper = mount(<TodoList />);

  wrapper.setState({ newTodo: "novo todo" });
  wrapper.instance().handleAddTodo();

  expect(setItemMock).toHaveBeenLastCalledWith(
    "todos",
    JSON.stringify(["novo todo"])
  );
});

it("should load todos in componentDidMount", () => {
  const getItemMock = jest.fn().mockReturnValue(JSON.stringify(["Fazer café"]));
  global.localStorage.__proto__.getItem = getItemMock;

  const wrapper = mount(<TodoList />);

  expect(wrapper.state("todos")).toEqual(["Fazer café"]);
});
