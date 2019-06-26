//importing all the libraries and files we need
import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
import cardInfo from "./components/Card/cardInfo.json";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import giftList from "./components/giftList";
import axios from "axios";
import Friends from "./components/Friends";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

//Creating the App class
class App extends React.Component {
  //Constructor that holds the state and binds all functions
  constructor(props, context) {
    super(props, context);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.addGift = this.addGift.bind(this);
    this.seeGifts = this.seeGifts.bind(this);
    this.logOut = this.logOut.bind(this);
    this.addFriend = this.addFriend.bind(this);

    this.handleGiftAdd = this.handleGiftAdd.bind(this);

    this.seeGiftsBought = this.seeGiftsBought.bind(this);


    this.state = {
      cardInfo,
      friends: [],
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false,
      friendName: "",
      friendDOB: "",
      friendRelationship: "",
      giftName: "",
      holiday: "",
      giftDesc: "",
      dateOfBirth: "",
      relationship: ""

    };
  }

//Function that will handle input changes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Function that will handle registration
  handleSignUp = event => {
    event.preventDefault();

    const { name, email, password } = this.state;

    axios.post("/api/user/create", { name, email, password }).then(response => {
    
      this.setState({
        name: response.data.name,
        email: response.data.email,
        userID: response.data.userID,
        isLoggedIn: true
      });

      localStorage.clear();
      localStorage.setItem("id", this.state.userID);
    });
  };

  //Function that will handle sign in
  handleFormSubmit = event => {
    //need to add logic to check this data with database

    event.preventDefault();

    const { email, password } = this.state;

    axios.get("/api/user/welcome/" + email + "/" + password).then(response => {

      if (response.data.userID) {
        this.setState({
          userID: response.data.userID,
          name: response.data.name
        });

        localStorage.clear();
        localStorage.setItem("id", this.state.userID);
      } else {
        alert("Your password is incorrect.")
      }
    }).then(() => {

      axios.get("api/friend/list/" + this.state.userID).then(response => {

        this.setState({
          friends: response.data,
          isLoggedIn: true
        });

        console.log(this.state.friends);

      });
        
        
    });

  };

  //Function that will handle sign out
  logOut = event => {
    event.preventDefault();
    this.setState({
      cardInfo,
      friends: [],
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false
    });
  };

  handleGiftAdd = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  addGift = id => {
    
    console.log(id);

    event.preventDefault();
    console.log("helloOOOO, gift");
    const { userId, giftName, giftDesc, holiday, friendName } = this.state;

    axios
      .post("/api/gift/create", {
        userId,
        giftName,
        giftDesc,
        holiday,
        friendName
      })
      .then(response => {
        console.log("axios", response);

        this.setState({
          giftName: response.data.giftName,
          giftDesc: response.data.giftDesc,
          holiday: response.data.holiday
        });
      });


  };

  seeGiftsBought = event => {
    console.log(event)
  }

  seeGifts = event => {
    event.preventDefault();
    console.log("hello, gift");
  };

  addFriend = event => {
    event.preventDefault();

    const id = localStorage.getItem("id");

    const { name, friendDOB, friendRelationship } = this.state;

    axios.post("/api/friend/create/" + id, { name, friendDOB, friendRelationship }).then(response => {

      const newFriend = [{
        name: response.data.name,
        dateOfBirth: response.data.friendDOB,
        relationship: response.data.friendRelationship,
        id: response.data.friendID
      }];

      this.setState(prevState => {
        return{
          friends: [...prevState.friends, ...newFriend]
        }
      });

    });
    
  };

  render() {
    const {
      handleGiftAdd,
      handleRegistration,

      handleInputChange,
      handleSignUp,
      handleFormSubmit,
      addGift,
      addFriend,
      logOut,
      seeGifts,
      seeGiftsBought
    } = this;

  
    return (
      <Wrapper>
        <Router>
          <Navbar
            userName={this.state.name}
            isLoggedIn={this.state.isLoggedIn}
            logOut={logOut}
          />
          <Switch>

            {this.state.isLoggedIn ? (
              <Route to="/friends">
                {this.state.friends.length > 0 ? (
                  this.state.friends.map(friend => (
                    <Friends
                      name={friend.name}
                      dateOfBirth={friend.dateOfBirth}
                      relationship={friend.relationship}
                      addFriend={addFriend}
                      seeGifts={seeGifts}
                      handleFriendAdd={handleFriendAdd}
                      addGift={addGift}
                      handleGiftAdd={handleGiftAdd}
                      giftName={this.state.giftName}
                      giftDesc={this.state.giftDesc}
                      holiday={this.state.holiday}
                    />
                  ))
                ) : (
                  <Friends />
                )}
              </Route>
            ) : (
              <Route exact path="/">
                <LoginForm
                  registerEmail={this.state.email}
                  registerName={this.state.name}
                  registerPassword={this.state.password}
                  email={this.state.email}
                  password={this.state.password}
                  handleRegistration={handleRegistration}
                  handleInputChange={handleInputChange}
                  handleSignUp={handleSignUp}
                  handleFormSubmit={handleFormSubmit}
                />
              </Route>
            )}
            />
            <Route path="/friends" render={props => (
              <Friends 
                {...props}
                friendsList={this.state.friends}
                addGift={addGift}
                addFriend={addFriend}
                seeGifts={seeGifts}
                handleInputChange={handleInputChange}
                seeGiftsBought={seeGiftsBought}
              />
            )} />
            <Route path="/gifts" component={giftList} />
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
