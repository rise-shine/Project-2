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
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

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

    this.state = {
      cardInfo,
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
        console.log("axios", response);
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
      cardInfo,
      friends: [],
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

  seeGiftsBought = event => {
    console.log(event);
  };

  seeGifts = id => {
    axios.get("/api/gift/list/" + id).then(response => {
      this.setState({
        gifts: [response.data]
      });

      console.log(this.state.gifts);
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
      addGift,
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
                <Friends
                  {...props}
                  friendsList={this.state.friends}
                  addFriend={addFriend}
                  seeGifts={seeGifts}
                  handleInputChange={handleInputChange}
                  seeGiftsBought={seeGiftsBought}
                  itemName={this.state.itemName}
                  price={this.state.price}
                  comments={this.state.comments}
                  saveGift={saveGift}
                />
              )}
            />
            <Route path="/gifts" component={giftList} />
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
