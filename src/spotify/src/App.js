import React from "react";

import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { Wrapper, Container, Content } from "./styles/components";

import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Header from "./components/header";
import Routes from "./routes";

import store from "./store";
import ErrorBox from "./components/error-box";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />

          <Content>
            <ErrorBox />

            <Header />

            <Routes />
          </Content>
        </Container>

        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
