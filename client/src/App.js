import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";

import cardInfo from "./components/Card/cardInfo.json";
import CardName from "./components/Card/CardName";

class App extends React.Component {
  state = {
    cardInfo
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <LoginForm />
        <CardName />

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
