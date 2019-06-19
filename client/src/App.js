import React from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
