import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
// import LandingPage from "./components/LandingPage";
import cardInfo from "./components/Card/cardInfo.json";
import friends from "./friends.json";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import giftList from "./components/giftList";
import axios from "axios";
import Friends from "./components/Friends"; 


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
    this.addGift = this.addGift.bind(this);

    this.state = {
      cardInfo,
      friends,
      show: false,
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false
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
          name: response.data.name,
          userID: response.data.userID,
          show: false,
          isLoggedIn: true
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

  addGift = event => {

    event.preventDefault();
    console.log("hi");
  };
    
  render() {
    const { handleRegistration, handleInputChange, handleSignUp, handleFormSubmit, addGift} = this;

    return (
      <Wrapper>
        <Router>
          <Navbar userName={this.state.name} isLoggedIn={this.state.isLoggedIn}/>
          <Switch>
            {this.state.isLoggedIn ?
              <Route to='/friends'>

                {
                  this.state.friends.length > 0 ?
                    this.state.friends.map(friend => (
                      <Friends
                        name={friend.name}
                        dateOfBirth={friend.dateOfBirth}
                        relationship={friend.relationship}
                        addGift={addGift}
                      />
                    )) :
                    <Friends addGift={addGift}/>
                }
                
              </Route> : <Route exact path='/'>
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
              </Route>}

            <Route path='/friends' component={Friends}></Route>  
            <Route path='/gifts' component={giftList}></Route>
            
            
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;

