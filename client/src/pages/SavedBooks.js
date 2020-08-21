import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import ShowSaved from "../components/ShowSaved";
import Footer from "../components/Footer";
import API from "../utils/API";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadbooks()
  }

  loadbooks = () => {
    API.getAllBooks()
    .then((res) => {
      this.setState({ books: res.data });
    })
    .catch((err) => console.log(err));
  }

  handleDeleteBook = id => {
    console.log(id)
    API.deleteBook(id)
      .then(res => this.loadbooks())
      .catch(err => console.log(err));
  };
  
  render() {
    return (

      <div>
        <Nav />
        <Jumbotron />
        {this.state.books.map((book) => 
        <ShowSaved 
          key={book._id}
          title={book.title}
          authors={book.authors.join(", ")}
          description={book.description}
          image={book.image}
          link={book.link}
          id={book._id}
          handleDeleteBook={this.handleDeleteBook}
        />
        )}
        <Footer />
      </div>
    );
  }
}

export default SavedBooks;
