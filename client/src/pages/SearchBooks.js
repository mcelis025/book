import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {

  };

  render() {
    return (

      <div>
        <Nav />
        <Jumbotron />
        <Search />
        <Results />
        <Footer />
      </div>

    );
  }
}

export default SearchBooks;
