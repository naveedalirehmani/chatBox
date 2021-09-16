import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { CardButton } from "../../components/button/CardButton";
import { CardInput } from "../../components/input/CardInput";
import {
  P1,
  Heading,
  A,
  TermsContainer,
  CheckDiv,
  Footer,
} from "../../GlobalStyles";
import { CheckBoxInput } from "../../components/input/CheckBoxInput";
import { axiosSignup } from "../../axios/axios.js";

export const SignUp = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    console.log(e.target.name);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log("clicked");
    axiosSignup
      .post("/", userData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Card>
      <Heading>Sign Up</Heading>
      <CardInput
        name="userName"
        type="text"
        placeholder="User Name"
        onChange={onChange}
      />
      <CardInput
        name="email"
        type="text"
        placeholder="E-mail Address"
        onChange={onChange}
      />
      <CardInput
        name="password"
        type="password"
        placeholder="Create Password"
        onChange={onChange}
      />
      <CardInput
        name="password"
        type="password"
        placeholder="Re-enter Password"
      />
      <TermsContainer>
        <CheckDiv>
          <CheckBoxInput />
          <P1>I Accept the</P1>
          <A>Terms and Conditions </A>
        </CheckDiv>
      </TermsContainer>
      <CardButton title="Sign Up" onclick={onSubmit} />
      <Footer>
        <P1>
          Already have a account?
          <Link to="/">
            <A>Log In</A>
          </Link>
        </P1>
      </Footer>
    </Card>
  );
};
