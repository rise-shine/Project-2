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
import PurchasedView from "./components/PurchasedView";

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
    this.delete = this.delete.bind(this);
    this.updateGift = this.updateGift.bind(this);

    this.state = {
      friends: [],
      gifts: [],
      giftsBought: [],
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

  seeGiftsBought = id => {

    axios.get("/api/gift/purchased/" + id).then(response => {
      this.setState({
        giftsBought: response.data,
        gifts: []
      });

    });
  };

  seeGifts = id => {

    axios.get("/api/gift/list/" + id).then(response => {
      this.setState({
        gifts: response.data,
        giftsBought: []
      });

    });
  };

  updateGift = event => {

    const giftID = event.target.id;

    axios.get("/api/gift/update/" + giftID).then(response => {

      const gifts = this.state.gifts.filter(gift => gift.id !== parseInt(giftID));
      this.setState({ gifts });

    });

  }

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

  delete = id => {
    axios.get("/api/friend/delete/" + id).then(response => {
      console.log(response)
      const friends = this.state.friends.filter(friend => friend.id !== id);
      this.setState({ friends });
    })
  
  }

  render() {
    const {
      handleInputChange,
      handleSignUp,
      handleFormSubmit,
      addFriend,
      logOut,
      seeGifts,
      seeGiftsBought,
      saveGift,
      updateGift
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
                    giftsBought={this.state.giftsBought}
                    saveGift={saveGift}
                    delete={this.delete}
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
                  updateGift={updateGift}
                />
              )}
            />

            <Route
              path="/purchased"
              render={props => (
                <PurchasedView
                  {...props}
                  giftsBought={this.state.giftsBought}
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
