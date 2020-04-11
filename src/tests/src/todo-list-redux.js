import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "./store/ducks/todos";

class TodoListRedux extends Component {
  state = {
    newTodo: "",
  };

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.newTodo);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          onChange={this.handleInputChange}
          value={this.state.newTodo}
          type="text"
          name="todo"
        />
        <button onClick={this.handleAddTodo}>Adicionar</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ todos: state.todos.data }),
  (dispatch) => bindActionCreators(TodosActions, dispatch)
)(TodoListRedux);
