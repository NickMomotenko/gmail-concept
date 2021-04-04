import React from "react";

import styled from "styled-components";
import Avatar from "../../UI/Avatar/Avatar";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { Block, Row } from "../../UI/Layout/Layout";

import colocol from "../../assets/cololoc.png";

const HeaderWrapp = styled.header`
  background-color: #fff;

  min-height: 50px;

  border-bottom: 1px solid #dddddd;

  padding: 10px 40px;
`;

const Header = () => {
  return (
    <HeaderWrapp>
      <Row>
        <Input placeholder="Search..." />
        <Block>
          {/* <Button icon={colocol} /> */}
          {/* <Avatar icon="https://cdn4.iconfinder.com/data/icons/people-40/48/avatar_female-512.png" /> */}
        </Block>
      </Row>
    </HeaderWrapp>
  );
};

export default Header;
