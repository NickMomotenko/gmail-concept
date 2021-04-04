import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import styled from "styled-components";
import { Block, Column, Row } from "../../UI/Layout/Layout";
import Message from "../../UI/Message/Message";
import Avatar from "../../UI/Avatar/Avatar";
import Text from "../../UI/Text/Text";

const ContentWrapp = styled.main`
  background-color: #fcfcfc;

  flex: 1;
`;

const MessageBottomClone = styled(Message)`
  margin-bottom: 0;
`;

const data = [
  {
    id: uuid(),
    user: {
      avatar:
        "https://robohash.org/voluptasodioexpedita.png?size=50x50&set=set1",
      fullname: "Mada Slide",
    },
    message: {
      title: "Software Engineer I",
      text:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      date: "Today, 09:22 AM",
    },
  },
  {
    id: uuid(),
    user: {
      avatar: "https://robohash.org/nobisatvelit.png?size=50x50&set=set1",
      fullname: "Amber Smoughton",
    },
    message: {
      title: "Analyst Programmer",
      text:
        "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna",
      date: "Today, 09:22 AM",
    },
  },
  {
    id: uuid(),
    user: {
      avatar: "https://robohash.org/quosdolorequia.png?size=50x50&set=set1",
      fullname: "Meagan Dubber",
    },
    message: {
      title: "Software Engineer I",
      text:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      date: "Today, 09:22 AM",
    },
  },
  {
    id: uuid(),
    user: {
      avatar: "https://robohash.org/eumaliasadipisci.png?size=50x50&set=set1",
      fullname: "Douglass Minet",
    },
    message: {
      title: "Software Engineer I",
      text:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      date: "Today, 09:22 AM",
    },
  },
  {
    id: uuid(),
    user: {
      avatar: "https://robohash.org/omnisnesciuntharum.png?size=50x50&set=set1",
      fullname: "Donovan Scoular",
    },
    message: {
      title: "Software Engineer I",
      text:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      date: "Today, 09:22 AM",
    },
  },
];

const Content = () => {
  const [activeMessage, setActiveMessage] = useState(data[0]);

  return (
    <ContentWrapp>
      {data.map((item) => (
        <Block key={item.id} style={{ position: "relative" }}>
          <Message
            style={{ position: "relative", zIndex: 5 }}
            activeId={activeMessage.id}
            itemId={item.id}
            onClick={() => setActiveMessage(item)}
          >
            <Row>
              <Column style={{ marginRight: "13px" }}>
                <Avatar icon="https://robohash.org/eumnesciuntoccaecati.bmp?size=50x50&set=set1" />
              </Column>
              <Column>
                <Row style={{ justifyContent: "space-between" }}>
                  <Text
                    text={item.user.fullname}
                    style={{ color: "#afb0b3" }}
                  />
                  <Text text={item.message.date} style={{ color: "#afb0b3" }} />
                </Row>
                <Block style={{ marginTop: "6px" }}>
                  <Text
                    text={item.message.title}
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      marginBottom: "5px",
                    }}
                  />
                  <Text
                    text={item.message.text}
                    style={{ lineHeight: "20px" }}
                  />
                </Block>
              </Column>
            </Row>
          </Message>
          <Block
            style={{
              opacity: activeMessage.id === item.id ? 1 : 0,
              transition: "opacity .4s",
              transitionDelay: ".2s",
            }}
          >
            <MessageBottomClone
              style={{
                position: "absolute",
                bottom: "-9px",
                zIndex: "4",
                transform: "scale(.96)",
              }}
            />
            <MessageBottomClone
              style={{
                position: "absolute",
                bottom: "-18px",
                zIndex: "3",
                transform: "scale(.91)",
              }}
            />
          </Block>
        </Block>
      ))}
    </ContentWrapp>
  );
};

export default Content;
