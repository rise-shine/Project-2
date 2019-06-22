import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
// import LandingPage from "./components/LandingPage";
import cardInfo from "./components/Card/cardInfo.json";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import giftList from "./components/giftList";
import axios from "axios";


class App extends React.Component {
  // state = {
  //   cardInfo
  // };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);

    this.state = {
      cardInfo,
      show: false,
      name: "",
      email: "",
      password: "",
      userID: 0
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleRegistration = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignUp = event => {

    event.preventDefault();

    const { name, email, password } = this.state;
    
    axios.post("/api/user/create", { name, email, password })
      .then(response => {

        console.log(response);
        this.setState({
          userID: response.data.userID,
          show: false
        })

        console.log(this.state)

      });

     
  }

  handleFormSubmit = event => {
    //need to add logic to check this data with database

    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

class App extends React.Component {
  render() {
    const { handleRegistration, handleInputChange, handleSignUp, handleFormSubmit} = this;

    return (
<<<<<<< HEAD
=======

>>>>>>> 57ddcc6bfd02a83e8a5ce50224941701459899ac
      <Wrapper>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <LoginForm 
                registerEmail={this.state.email} 
                registerName={this.state.name} 
                registerPassword={this.state.password} 
                email={this.state.email} 
                password={this.state.password}
                handleRegistration = {handleRegistration}
                handleInputChange = {handleInputChange}
                handleSignUp = {handleSignUp}
                handleFormSubmit = {handleFormSubmit}
              />
            </Route>

            <Route path='/about' component={About}></Route>
            <Route path='/gifts' component={giftList}></Route>
            <Route path='/friends' component={friendsList}></Route>
            
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;

