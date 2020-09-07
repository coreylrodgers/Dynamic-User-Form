import React, { useState } from "react";
import logo from "./public/images/zapid.png";
import "./App.css";
import Form from "./components/Form/index";
import { Wrapper, Header, Logo, PageBody, Footer } from "./styles";
import { signUp, feedbackForm, mailingList } from "../src/libs/FormOptions";
function App() {
  return (
    <Wrapper className="App">
      <Header className="App-header">
        <Logo src={logo} alt="logo" />
      </Header>
      {/*change the schema variable here below to feedbackForm, SignUp or Mailing List*/}
      <PageBody>
        <Form schema={signUp} />
      </PageBody>
      <Footer>
        <p>Footer Information</p>
      </Footer>
    </Wrapper>
  );
}

export default App;
