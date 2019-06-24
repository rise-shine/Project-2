import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
import cardInfo from "./components/Card/cardInfo.json";
import CardName from "./components/Card/CardName";
import friends from "./friends.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import giftList from "./components/giftList";
import axios from "axios";
import Friends from "./components/Friends";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.addGift = this.addGift.bind(this);
    this.seeGifts = this.seeGifts.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleFriendAdd = this.handleFriendAdd.bind(this);
    this.addFriend = this.addFriend.bind(this);

    this.state = {
      cardInfo,
      friends,
      show: false,
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false,
      friendName: "",
      friendDOB: "",
      friendRelationship: ""
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

    axios.post("/api/user/create", { name, email, password }).then(response => {
      console.log(response);

      this.setState({
        name: response.data.name,
        email: response.data.email,
        userID: response.data.userID,
        isLoggedIn: true
      });

      console.log(this.state);

      localStorage.clear();
      localStorage.setItem("id", this.state.userID);
    });
  };

  handleFormSubmit = event => {
    //need to add logic to check this data with database

    event.preventDefault();

    const { email, password } = this.state;

    axios.get("/api/user/welcome/" + email).then(response => {
      // console.log(response);

      console.log("hi");
      if (response.data.userID) {
        this.setState({
          userID: response.data.userID,
          name: response.data.name,
          isLoggedIn: true
        });

        localStorage.clear();
        localStorage.setItem("id", this.state.userID);
      }
    });

    // this.setState({
    //   email: "",
    //   password: "",
    // });
  };

  logOut = event => {
    event.preventDefault();
    this.setState({
      cardInfo,
      friends,
      show: false,
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
  addGift = event => {
    event.preventDefault();
    console.log("helloOOOO, gift");
    const { userId, giftName, giftDesc, holiday, friendId } = this.state;
    this.setState({
      userId: response.data.userId,
      giftName: response.data.giftName,
      giftDesc: response.data.giftDesc,
      holiday: response.data.holiday,
      friendId: response.data.friendId
    });
    axios
      .post("/api/friend/create", {
        userId,
        giftName,
        giftDesc,
        holiday,
        friendId
      })
      .then(response => {
        console.log(response);
      });
  };

  seeGifts = event => {
    event.preventDefault();
    console.log("hello, gift");
  };

  handleFriendAdd = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  addFriend = event => {
    event.preventDefault();
    console.log("hello, friend");
  };

  render() {
    const {
      handleRegistration,
      handleInputChange,
      handleSignUp,
      handleFormSubmit,
      addGift,
      addFriend,
      logOut,
      seeGifts,
      handleFriendAdd
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
                      addGift={addGift}
                      addFriend={addFriend}
                      seeGifts={seeGifts}
                      handleFriendAdd={handleFriendAdd}
                    />
                  ))
                ) : (
                  <Friends addGift={addGift} />
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

            <Route path="/friends" component={Friends} />
            <Route path="/gifts" component={giftList} />
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
