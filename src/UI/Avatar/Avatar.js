import React from "react";

import styled from "styled-components";

const AvatarWrapp = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  overflow: hidden;
`;

const AvatarIcon = styled.img.attrs(({ icon }) => ({
  src: icon,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Avatar = ({ icon }) => {
  return (
    <AvatarWrapp>
      <AvatarIcon icon={icon} />
    </AvatarWrapp>
  );
};

export default Avatar;
