import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import styled from "styled-components";

import up from "../../assets/1.png";
import down from "../../assets/2.png";

const MenuWrapp = styled.nav`
  margin-top: 50px;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li``;

const MenuText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    props.activeId !== props.itemId ? "#383a42" : "#a5b0df"};

  transition: color 0.4s;
`;

const MenuCounter = styled.span`
  display: inline-block;

  background: ${(props) =>
    props.activeId === props.itemId ? "#1879ff" : "#BEC1CB"};
  border-radius: 6px;

  height: 20px;
  width: 20px;

  color: #fff;
  font-weight: 500;
  font-size: 12px;

  text-align: center;
  line-height: 20px;
  position: relative;
  z-index: 2;

  transition: background-color 0.4s;
`;

const MenuLink = styled.a`
  background-color: ${(props) =>
    props.activeId === props.itemId ? "#fff" : "transparent"};
  padding: 18px 15px;
  position: relative;

  display: flex;
  justify-content: space-between;

  border-radius: 12px 0 0 12px;

  transition: background-color 0.4s;

  &:before,
  &:after {
    content: "";
    display: inline-block;

    background-size: contain;
    z-index: 1;

    height: 20px;
    width: 38px;

    position: absolute;
    right: -6px;

    opacity: ${(props) => (props.activeId === props.itemId ? "1" : "0")};

    pointer-events: none;
  }

  &:before {
    bottom: 100%;
    background: url(${up}) center no-repeat;
  }

  &:after {
    bottom: auto;
    top: 100%;
    background: url(${down}) center no-repeat;
  }

  &:hover {
    ${MenuText} {
      color: #a5b0df;
    }

    ${MenuCounter} {
      background-color: #1879ff;
    }
  }
`;

const list = [
  {
    id: uuid(),
    title: "Inbox",
    counter: 3,
  },
  {
    id: uuid(),
    title: "Starred",
    counter: 0,
  },
  {
    id: uuid(),
    title: "Snoozed",
    counter: 0,
  },
  {
    id: uuid(),
    title: "Sent",
    counter: 0,
  },
  {
    id: uuid(),
    title: "Draft",
    counter: 0,
  },
  {
    id: uuid(),
    title: "Spam",
    counter: 5,
  },
];

const Menu = () => {
  const [active, setActive] = useState(list[0]);

  const handleClick = (event, item) => {
    event.preventDefault();
    setActive(item);
  };

  return (
    <MenuWrapp>
      <MenuList>
        {list.map((item) => (
          <MenuItem key={item.id}>
            <MenuLink
              href="#"
              activeId={active.id}
              itemId={item.id}
              onClick={(event) => handleClick(event, item)}
            >
              <MenuText activeId={active.id} itemId={item.id}>
                {item.title}
              </MenuText>
              {item.counter === 0 ? (
                <></>
              ) : (
                <MenuCounter activeId={active.id} itemId={item.id}>
                  {item.counter}
                </MenuCounter>
              )}
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapp>
  );
};

export default Menu;
