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

    this.state = {
      friends: [],
      gifts: [],
      userName: "",
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
    
    const { userName, email, password } = this.state;

    axios.post("/api/user/create", { userName, email, password }).then(response => {
      this.setState({
        userName: response.data.name,
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

    const { email, password } = this.state;

    axios
      .post("/api/user/welcome/" + email + "/" + password)
      .then(response => {

        console.log(response.data);

        if (response.data === true) {
          axios.get("/api/user/welcome/" + this.state.email).then(response => {

            console.log(response)
            this.setState({
                  userID: response.data.userID,
                  userName: response.data.name,
                  isLoggedIn: true
            })

          } 
            ).then(() => {

              localStorage.clear();
              localStorage.setItem("id", this.state.userID);

              axios.get("api/friend/list/" + this.state.userID).then(response => {
                this.setState({
                  friends: response.data
                });
              });
            });
        } else {

          alert("Your password is incorrect.");

        }
      })
  };

  //Function that will handle sign out
  logOut = event => {
    event.preventDefault();
    this.setState({
      friends: [],
      gifts: [],
      userName: "",
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false,
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
            userName={this.state.userName}
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
                  registerName={this.state.userName}
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
                <GiftsView
                  {...props}
                  gifts={this.state.gifts}
                />
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
