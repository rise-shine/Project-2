import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
import cardInfo from "./components/Card/cardInfo.json";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import giftList from "./components/giftList";

class App extends React.Component {
  state = {
    cardInfo
  };

  render() {
    return (
      
      <Wrapper>
        <Router>
        <Navbar />
        <Switch>
        <Route path='/' component={LoginForm}></Route>
        <Route path="/giftList" component={giftList}></Route>
        </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;

