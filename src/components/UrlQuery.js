import React from "react";
import { FormControl, FormGroup, Button, Image } from "react-bootstrap";
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

export default function UrlQuery() {
  return (
    <>
      <Wrapper>
        <Image
          style={{ height: 200, margin: "0 0 1% 0" }}
          src={PCTLogo}
          alt="PCT Logo"
        />
        <Title>Homework Helper</Title>
        <FormGroup>
          <FormControl type="URL" placeholder="Enter URL" />
        </FormGroup>
        <Button
          href="./QueryFinished"
          type="submit"
          style={{
            color: "white",
            background: "purple",
            border: "purple",
          }}
        >
          Help Me!
        </Button>
      </Wrapper>
    </>
  );
}
