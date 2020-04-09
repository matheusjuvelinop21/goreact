import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>
    <User>
      <img
        src="https://avatars3.githubusercontent.com/u/62709576?s=460&v=4"
        alt="avatar"
      />
      Matheus Juvelino
    </User>
  </Container>
);

export default Header;
