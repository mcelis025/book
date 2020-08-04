import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import ShowSaved from "../components/ShowSaved";
import Footer from "../components/Footer";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

class SavedBooks extends Component {
  state = {

  };

  render() {
    return (

      <div>
        <Nav />
        <Jumbotron />
        <ShowSaved />
        <Footer />
      </div>

    );
  }
}

export default SavedBooks;
