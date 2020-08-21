import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";
import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    q: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.loadbooks()
  };

  loadbooks = () => {
    API.getBooks(this.state.q)
    .then(res => this.setState({ books: res.data }))
    .catch((err) => console.log("Error looking for book: " + err));
  }

  handleSave = (book)=> {
    console.log(book)
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }).then((reults) => this.loadbooks()) ;
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Search 
          q={this.state.q}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {console.log(this.state.books)}
        {this.state.books.length > 0 ?  this.state.books.map((book) =>
        <Results
           
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.thumbnail}
          link={book.volumeInfo.infoLink}
          book={book}
          handleSave={this.handleSave}
        />
        ) : "" }
        <Footer />
      </div>
    );
  }
}

export default Books;
