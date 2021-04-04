import React from "react";

import styled from "styled-components";
import { Block, Row } from "../../UI/Layout/Layout";

import Text from "../../UI/Text/Text";

const MemoryBlockWrapp = styled.div`
  border-top: 1px solid #dddddd;
  position: relative;

  height: 75px;
  padding: 12px 15px 15px 21px;

  &:before {
    content: "";
    display: block;
    height: 100%;
    width: ${(props) => `${props.percent}%`};
    background-color: #1879ff;

    position: absolute;
    top: 0;
    left: 0;
  }
`;

const MemoryBlock = () => {
  const full = 20;

  const [memoryCounter, setMemoryCounter] = React.useState(17);

  const getPersentForMemory = () => {
    let res = (100 * memoryCounter) / full;

    return res;
  };

  return (
    <MemoryBlockWrapp percent={getPersentForMemory()}>
      <Block style={{ position: "relative" }}>
        <Text style={{ color: "#fff" }} text="Google drive" />
        <Row style={{ marginTop: "10px" }}>
          <Text
            style={{ color: "#fff" }}
            text={`${memoryCounter} GB of ${full} GB used `}
          />
          <Text
            style={{ color: "#323232", marginLeft: "auto" }}
            text={`${getPersentForMemory()}%`}
          />
        </Row>
      </Block>

      {}
    </MemoryBlockWrapp>
  );
};

export default MemoryBlock;
