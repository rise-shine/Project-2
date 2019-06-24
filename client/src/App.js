//importing all the libraries and files we need
import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
import cardInfo from "./components/Card/cardInfo.json";
// import CardName from "./components/Card/CardName";
import friends from "./friends.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import giftList from "./components/giftList";
import axios from "axios";
import Friends from "./components/Friends";

//Creating the App class
class App extends React.Component {
  //Constructor that holds the state and binds all functions
  constructor(props, context) {
    super(props, context);

    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.addGift = this.addGift.bind(this);
    this.seeGifts = this.seeGifts.bind(this);
    this.logOut = this.logOut.bind(this);
    this.addFriend = this.addFriend.bind(this);

    this.state = {
      cardInfo,
      friends: [],
      // show: false,
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false,
      friendName: "",
      dateOfBirth: "",
      relationship: ""
    };
  }

  // handleClose() {
  //   this.setState({ show: false });
  // }

  // handleShow() {
  //   this.setState({ show: true });
  // }

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

  //Function that will handle sign in
  handleFormSubmit = event => {
    //need to add logic to check this data with database

    event.preventDefault();

    const { email, password } = this.state;

    axios.get("/api/user/welcome/" + email + "/" + password).then(response => {

      console.log("hi");
      if (response.data.userID) {
        this.setState({
          userID: response.data.userID,
          name: response.data.name,
          isLoggedIn: true
        });

        localStorage.clear();
        localStorage.setItem("id", this.state.userID);
      } else {
        alert("Your password is incorrect.")
      }
    }).then(() => {

      axios.get("api/friend/list/" + this.state.userID).then(response => {

        console.log(response.data);
        // this.setState(prevState => {
        //   return {
        //     friends: [...prevState.friends, ...newFriend]
        //   }
        // });

      });
        
        
    });

  };

  //Function that will handle sign out
  logOut = event => {
    event.preventDefault();
    this.setState({
      cardInfo,
      friends,
      // show: false,
      name: "",
      email: "",
      password: "",
      userID: 0,
      isLoggedIn: false
    });
  };

  addGift = event => {
    event.preventDefault();
    console.log("helloOOOO, gift");
  };

  seeGifts = event => {
    event.preventDefault();
    console.log("hello, gift");
  };

  // handleFriendAdd = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  addFriend = event => {
    event.preventDefault();
    console.log("hello, friend");

    const id = localStorage.getItem("id");

    const { friendName, friendDOB, friendRelationship } = this.state;

    console.log(this.state)

    axios.post("/api/friend/create/" + id, { friendName, friendDOB, friendRelationship }).then(response => {
      console.log(response);

      const newFriend = [{
        friendName: response.data.friendName,
        dateOfBirth: response.data.friendDOB,
        relationship: response.data.friendRelationship,
        id: response.data.friendID
      }];

      this.setState(prevState => {
        return{
          friends: [...prevState.friends, ...newFriend]
        }
      });

      console.log(this.state);
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
      seeGifts
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
                      key={friend.id}
                      name={friend.name}
                      dateOfBirth={friend.dateOfBirth}
                      relationship={friend.relationship}
                      addGift={addGift}
                      addFriend={addFriend}
                      seeGifts={seeGifts}
                      handleInputChange={handleInputChange}
                    />
                  ))
                ) : (
                  <Friends addFriend={addFriend} addGift={addGift} handleInputChange={handleInputChange}/>
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
