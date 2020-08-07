import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";
import axios from "axios";
import API from "../utils/API";
// import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
    searchBook: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getBooks(this.state.searchBook)
      .then(res => this.setState({ books: res.data }))
      .catch((err) => console.log("Error looking for book: " + err));
  };

  handleSave = id => {
    const book = this.state.books.find(book => book.id === id);
    API.saveBook({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }).then(() => this.getBooks());
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Search 
          searchBook={this.state.searchBook}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.books.map(book => (
        <Results
            id={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={ book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            // book={this.state.book}
        />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Books;
