import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
import About from "./components/About";
import giftList from "./components/giftList";
import friendsList from "./components/Friends";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (

      <Wrapper>
        <Router>
        <Navbar />
        <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/gifts' component={giftList}></Route>
        <Route path='/friends' component={friendsList}></Route>
         <Route path='/' component={LoginForm}></Route>
         </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;

