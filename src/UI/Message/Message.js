import React from "react";

import styled from "styled-components";

const MessageWrapp = styled.div`
  background: ${(props) =>
    props.activeId === props.itemId ? "#fff" : "transparent"};

  ${(props) =>
    props.activeId === props.itemId &&
    `box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06)`};

  border-radius: 16px;

  min-height: 120px;
  padding: 16px;

  max-width: 375px;
  width: 100%;
  margin-bottom: 30px;

  cursor: pointer;

  transition: background 0.4s;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Message = ({ children, ...props }) => {
  return <MessageWrapp {...props}>{children}</MessageWrapp>;
};

export default Message;
