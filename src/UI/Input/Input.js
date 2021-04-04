import React from "react";

import styled from "styled-components";

import lypa from "../../assets/lypa.png";

const InputWrapp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    display: inline-block;
    width: 19px;
    height: 19px;

    background: url(${lypa}) center no-repeat;
    background-size: contain;
    margin-right: 16px;
  }
`;

const InputMain = styled.input`
  color: #c4c4c4;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;

  line-height: 26px;
  /* padding: 10px; */

  &::placeholder {
    color: #c4c4c4;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    line-height: 17px;
  }
`;

const Input = ({ ...props }) => {
  return (
    <InputWrapp>
      <InputMain {...props} />
    </InputWrapp>
  );
};

export default Input;
