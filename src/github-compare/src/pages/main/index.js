import React, { Component } from "react";
import moment from "moment";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";

import api from "../../services/api";

import CompareList from "../../components/compare-list";

export default class Main extends Component {
  state = {
    loading: false,
    error: false,
    repository: "",
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    await this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(
        `repos/${this.state.repository}`
      );

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        error: false,
        repository: "",
        repositories: [...this.state.repositories, repository]
      });
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.error} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/reposítorio"
            value={this.state.repository}
            onChange={e => this.setState({ repository: e.target.value })}
          />

          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse"></i>
            ) : (
              "Ok"
            )}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
