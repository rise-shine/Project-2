//importing all the libraries and files we need
import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Friends from "./components/Friends";
import GiftsView from "./components/GiftsView";

//Creating the App class
class App extends React.Component {
  //Constructor that holds the state and binds all functions
  constructor(props, context) {
    super(props, context);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.seeGifts = this.seeGifts.bind(this);
    this.logOut = this.logOut.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.seeGiftsBought = this.seeGiftsBought.bind(this);
    this.saveGift = this.saveGift.bind(this);
    this.addGift = this.addGift.bind(this);

    this.state = {
      friends: [],
      gifts: [],
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false,
      friendName: "",
      dateOfBirth: "",
      relationship: "",
      price: "",
      itemName: "",
      gift: "",
      comments: ""
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

    axios
      .get("/api/user/welcome/" + email + "/" + password)
      .then(response => {
        if (response.data.userID === "invalid") {
          console.log(
            alert(
              "This is not a valid userID.  If you do not have an account use the 'create a new account' below"
            )
          );
          this.setState({
            isLoggedIn: false
          });
        } else if (response.data.userID) {
          this.setState({
            userID: response.data.userID,
            name: response.data.name,
            isLoggedIn: true
          });

          localStorage.clear();
          localStorage.setItem("id", this.state.userID);
        } else {
          alert("Your password is incorrect.");
        }
      })
      .then(() => {
        axios.get("api/friend/list/" + this.state.userID).then(response => {
          this.setState({
            friends: response.data
          });
        });
      });
  };

  //Function that will handle sign out
  logOut = event => {
    event.preventDefault();
    this.setState({
      friends: [],
      gifts: [],
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false
    });
  };

  saveGift = event => {
    const friendID = event.target.id;
    const { itemName, comments, price } = this.state;
    console.log("this is save gift");

    axios
      .post("/api/gift/create/" + friendID, { itemName, comments, price })
      .then(response => {
        this.setState({
          itemName: "",
          comments: "",
          price: ""
        });
      });
  };

  addGift = id => {
    console.log(id);
    let user = this.state.userID;
    let friendID = this.setState({ friendID: id });
    //event.preventDefault();
    console.log("helloOOOO, gift");
    const { gift, giftDesc, holiday } = this.state;
    console.log(gift);
    axios
      .post("/api/gift/create/" + user, {
        user,
        gift,
        giftDesc,
        holiday,
        friendID
      })
      .then(response => {
        console.log("axios respnose", response);

        this.setState({
          userID: response.data.user,
          giftName: response.data.giftName,
          giftDesc: response.data.giftDesc,
          holiday: response.data.holiday,
          friendID: response.data.friendID
        });
      });
  };
  seeGiftsBought = event => {
    console.log(event);
  };

  seeGifts = id => {
    axios.get("/api/gift/list/" + id).then(response => {
      this.setState({
        gifts: response.data
      });
    });
  };

  addFriend = event => {
    const id = localStorage.getItem("id");
    const { name, friendDOB, friendRelationship } = this.state;

    axios
      .post("/api/friend/create/" + id, { name, friendDOB, friendRelationship })
      .then(response => {
        const newFriend = [
          {
            name: response.data.name,
            dateOfBirth: response.data.friendDOB,
            relationship: response.data.friendRelationship,
            id: response.data.friendID
          }
        ];

        this.setState(prevState => {
          return {
            friends: [...prevState.friends, ...newFriend]
          };
        });
      });
  };

  render() {
    const {
      handleInputChange,
      handleSignUp,
      handleFormSubmit,
      addFriend,
      logOut,
      seeGifts,
      seeGiftsBought,
      saveGift
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
            <Route
              exact
              path="/"
              render={props => (
                <LoginForm
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  registerEmail={this.state.email}
                  registerName={this.state.name}
                  registerPassword={this.state.password}
                  email={this.state.email}
                  password={this.state.password}
                  handleInputChange={handleInputChange}
                  handleSignUp={handleSignUp}
                  handleFormSubmit={handleFormSubmit}
                />
              )}
            />
            <Route
              path="/friends"
              render={props => (
                <Wrapper>
                  <Friends
                    {...props}
                    friendsList={this.state.friends}
                    addFriend={addFriend}
                    seeGifts={seeGifts}
                    handleInputChange={handleInputChange}
                    seeGiftsBought={seeGiftsBought}
                    itemName={this.state.itemName}
                    addGift={this.addGift}
                    price={this.state.price}
                    comments={this.state.comments}
                    gifts={this.state.gifts}
                    saveGift={saveGift}
                  />
                </Wrapper>
              )}
            />

            <Route
              path="/gifts"
              render={props => (
                <GiftsView {...props} gifts={this.state.gifts} />
              )}
            />
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
