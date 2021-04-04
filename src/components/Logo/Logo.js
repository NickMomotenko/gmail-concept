import React from "react";

import styled from "styled-components";

import logoIcon from "../../assets/logo.png";

const LogoWrapp = styled.a`
  display: inline-block;
`;

const LogoIcon = styled.img.attrs((props) => ({
  src: props.icon,
}))``;

const Logo = () => {
  return (
    <LogoWrapp href="#">
      <LogoIcon icon={logoIcon} />
    </LogoWrapp>
  );
};

export default Logo;
