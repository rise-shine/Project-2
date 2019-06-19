import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
 render() {

  return (

    <Wrapper>  
      <Navbar />
      <Footer />
    </Wrapper>
  )
  
}

};
  
export default App;
