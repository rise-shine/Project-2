import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/login.js";
import SignUpform from "./components/signup.js";
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <LoginForm />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
