import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";
import Footer from "../components/Footer";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

class SavedPage extends Component {
  state = {

  };

  render() {
    return (

      <div>
        <Nav />
        <Jumbotron />
        <SavedBooks />
        <Footer />
      </div>

    );
  }
}

export default SavedPage;
