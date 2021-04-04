import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button`
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06);
  border-radius: 12px;

  width: 100%;
  min-height: 50px;

  color: #383a42;
  font-weight: 600;
  font-size: 16px;
`;
const ButtonIcon = styled.img.attrs((props) => ({
  src: props.icon,
}))``;

const Button = ({ text, icon, onClick, ...props }) => {
  return (
    <ButtonWrapp onClick={onClick} {...props}>
      {icon && <ButtonIcon icon={icon} />}
      {text && text}
    </ButtonWrapp>
  );
};

export default Button;
