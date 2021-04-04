import React from "react";

import styled from "styled-components";

const TextareaWrapp = styled.textarea`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 16px;

  width: 100%;

  max-height: 100%;

  padding: 15px;

  color: #383a42;
  font-size: 14px;
  font-weight: 500;

  resize: none;

  &:placeholder {
    color: #383a42;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Textarea = (props) => {
  return <TextareaWrapp {...props} />;
};

export default Textarea;
