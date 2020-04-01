import React, { Fragment } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import * as TodoActions from "./store/actions/todo";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo()}>Adicionar</button>
  </Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => bindActionCreators(TodoActions, dispatch)
)(TodoList);
