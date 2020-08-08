import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import NoPage from "../components/NoPage";
import Footer from "../components/Footer";

function NoMatch() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <NoPage />
      <Footer />
    </div>
  );
}

export default NoMatch;
