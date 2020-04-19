import React from "react";
import { Button, Image } from "react-bootstrap";
import PCTLogo from "../assets/PCT-logo.png";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Title = styled.h2`
  margin: 10;
`;

export default function QueryFinished() {
  return (
    <>
      <Wrapper>
        <Image
          style={{ height: 200, margin: "0 0 1% 0" }}
          src={PCTLogo}
          alt="PCT Logo"
        />
        <Title>Homework Helper</Title>
        <Title>All Done! Check your email for a surprise :)</Title>
        <Button
          href="./UrlQuery"
          type="submit"
          style={{
            color: "white",
            background: "purple",
            border: "purple",
            margin: "1% 0",
          }}
        >
          Help me again!
        </Button>
        <Button
          href="/"
          type="submit"
          style={{
            color: "white",
            background: "purple",
            border: "purple",
          }}
        >
          Log Out
        </Button>
      </Wrapper>
    </>
  );
}
