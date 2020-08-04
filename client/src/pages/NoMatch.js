import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import NoPage from "../components/NoPage";
import Footer from "../components/Footer";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

class NoMatch extends Component {
  state = {

  };

  render() {
    return (

      <div>
        <Nav />
        <Jumbotron />
        <NoPage />
        <Footer />
      </div>

    );
  }
}

export default NoMatch;