import React, { Component } from "react";
import styled from "styled-components";
import {
  FormControl,
  FormGroup,
  Button,
  FormLabel,
  Image,
} from "react-bootstrap";
import PCTLogo from "../assets/PCT-logo.png";

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

constructor(props) {
    super(props);
    this.state = {username: '',
                  password: ''
    };
}


export class Login extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <div>
            <Image
              src={PCTLogo}
              alt="PCT Logo"
              style={{ height: 200, margin: "0 0 10% 0" }}
            />
          </div>
          <div>
            <Title>Homework Helper</Title>
          </div>
          <div>
            <FormGroup controlId="Login">
              <FormControl
                style={{ margin: "0 0 3% 0" }}
                type="username"
                placeholder="Username"
              />
              <FormControl
                style={{ margin: "0 0 3% 0" }}
                type="password"
                placeholder="Password"
              />
              <FormControl
                type="chapterkeyword"
                placeholder="Chapter Keyword"
              />
            </FormGroup>
          </div>
          <div>
            <Button
              href="./UrlQuery"
              type="submit"
              style={{
                color: "white",
                background: "purple",
                border: "purple",
              }}
            >
              Submit
            </Button>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default Login;
