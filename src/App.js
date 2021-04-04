import React, { useState } from "react";

import styled from "styled-components";

import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Logo from "./components/Logo/Logo";
import MemoryBlock from "./components/MemoryBlock/MemoryBlock";

import { Block, Row } from "./UI/Layout/Layout";
import Avatar from "./UI/Avatar/Avatar";
import Button from "./UI/Button/Button";
import Popup from "./UI/Popup/Popup";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const AppColumn = styled.div`
  width: 242px;
  background-color: #f7f7f7;

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    flex: 1;
    background-color: transparent;
  }
`;

const App = () => {
  // is active
  const [isActivePopup, setIsActivePopup] = useState(true);
  // full size
  const [isPopupFullSize, setIsPopupFullSize] = useState(false);
  // roled up or no
  const [isRoledUp, setIsRoledUp] = useState(false);

  const changePopupRoleUp = () => {
    setIsPopupFullSize(!isPopupFullSize);
  };

  return (
    <AppWrapp>
      <Row>
        <AppColumn>
          <Block style={{ padding: "0 20px" }}>
            <Row style={{ marginBottom: "25px" }}>
              <Logo />
            </Row>
            <Button text="Compose" />
          </Block>
          <Block style={{ paddingLeft: "20px" }}>
            <Menu />
          </Block>
          <MemoryBlock />
        </AppColumn>
        <AppColumn style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Content />
        </AppColumn>
      </Row>
      {isActivePopup ? (
        <Popup
          active={isActivePopup}
          fullSize={isPopupFullSize}
          roled={isRoledUp}
          setIsActivePopup={setIsActivePopup}
          changePopupRoleUp={changePopupRoleUp}
          setIsRoledUp={setIsRoledUp}
        />
      ) : (
        <></>
      )}
    </AppWrapp>
  );
};

export default App;
