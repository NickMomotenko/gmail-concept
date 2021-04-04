import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Block, Paper, Row } from "../Layout/Layout";
import Text from "../Text/Text";
import Textarea from "../Textarea/Textarea";

import role from "../../assets/role.png";
import full from "../../assets/full.png";
import close from "../../assets/close.png";

import smile from "../../assets/smile.png";
import pic from "../../assets/pic.png";

import down from "../../assets/down.png";

const PopupWrapp = styled.div`
  position: fixed;
  bottom: ${(props) => (props.roled ? props.bottomPosition() : "15px")};
  left: ${(props) => (props.fullSize ? "4%" : "initial")};
  top: ${(props) => (props.fullSize ? "15px" : "initial")};
  right: 8px;

  z-index: 10;

  background-color: #fff;

  width: ${(props) => !props.fullSize && "600px"};

  transition: bottom 0.5s;
`;

const PopupHeader = styled.div``;

const PopupText = styled(Text)`
  margin-right: 10px;
`;

const PopupOptionButton = styled(Button)`
  padding: 5px;
  min-height: 0;
  box-shadow: none;
  margin: 0 5px;
`;

const BlueButton = styled(Button)`
  background: #1879ff;
  color: #fff;
  max-width: 155px;

  font-size: 15px;
  text-transform: uppercase;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  min-height: 48px;

  min-width: calc(156px - 40px);
`;

const BlueButtonWithLine = styled(Button)`
  background: #1879ff;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  border-left: 1px solid #4593fe;

  width: 40px;
  min-height: 48px;
`;

const Popup = ({
  active,
  fullSize,
  roled,
  setIsActivePopup,
  changePopupRoleUp,
  setIsRoledUp,
}) => {
  const headerButtons = [
    {
      id: uuid(),
      title: "role up",
      icon: role,
      onClick: () => {
        changeRolePosition();
      },
    },
    {
      id: uuid(),
      title: "full screen",
      icon: full,
      onClick: () => {
        changePopupRoleUp();
      },
    },
    {
      id: uuid(),
      title: "close",
      icon: close,
      onClick: () => {
        setIsActivePopup(false);
      },
    },
  ];

  const bottomButtons = [
    {
      id: uuid(),
      title: "smile",
      icon: smile,
    },
    {
      id: uuid(),
      title: "image",
      icon: pic,
    },
  ];

  const popupRef = React.useRef(null);
  const popupHeader = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsActivePopup(true);
    }, 3000);
  }, [!active]);

  const changeRolePosition = () => {
    setIsRoledUp(!roled);
  };

  const calculatePopupBottomPosition = () => {
    const popupPadding = 22;

    let height = popupRef.current.clientHeight; // popup height

    let headerHeight = popupHeader.current.clientHeight + popupPadding * 2; // popup header height

    return `-${height - headerHeight}px`;
  };

  return (
    <PopupWrapp
      ref={popupRef}
      active={active}
      fullSize={fullSize}
      roled={roled}
      bottomPosition={calculatePopupBottomPosition}
    >
      <Paper style={{ padding: "22px" }}>
        <PopupHeader ref={popupHeader}>
          <Row
            center
            style={{
              marginBottom: "20px",
              justifyContent: "space-between",
            }}
          >
            <Text
              text="Test title"
              style={{ fontSize: "16px", fontWeight: "600" }}
            />
            <Row>
              {headerButtons.map((button) => (
                <PopupOptionButton
                  key={button.id}
                  onClick={button.onClick}
                  icon={button.icon}
                />
              ))}
            </Row>
          </Row>
        </PopupHeader>
        <Row center style={{ marginBottom: "25px" }}>
          <PopupText text="To" />
          <Row center>
            <Avatar
              icon="https://robohash.org/voluptasodioexpedita.png?size=50x50&set=set1"
              style={{ marginRight: "10px" }}
            />
            <PopupText text="John Doe" style={{ fontWeight: "600" }} />
          </Row>
        </Row>
        <Row style={{ minHeight: "220px", marginBottom: "20px" }}>
          <Textarea placeholder="Your message..." />
        </Row>
        <Row>
          <Row center>
            <BlueButton text="Send" />
            <BlueButtonWithLine icon={down} />
          </Row>
          <Row center style={{ marginLeft: "20px" }}>
            {bottomButtons.map((button) => (
              <PopupOptionButton key={button.id} icon={button.icon} />
            ))}
          </Row>
        </Row>
      </Paper>
    </PopupWrapp>
  );
};

export default Popup;
