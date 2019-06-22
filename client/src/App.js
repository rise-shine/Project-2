import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm/login";
import Card from "./components/Card/Card";
import cardInfo from "./components/Card/cardInfo.json";

class App extends React.Component {
  state = {
    cardInfo
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <LoginForm />
        {this.state.cardInfo.map(card => (
          <Card
            id={card.id}
            name={card.friend}
            gift={card.gift}
            price={card.price}
            purchased={card.purchased}
          />
        ))}

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
