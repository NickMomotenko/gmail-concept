import React from "react";

import styled from "styled-components";

const TextWrapp = styled.div`
  color: #383a42;
  font-weight: 500;
  font-size: 12px;
`;

const Text = ({ text, ...props }) => {
  return <TextWrapp {...props}>{text}</TextWrapp>;
};

export default Text;
