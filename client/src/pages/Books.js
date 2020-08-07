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

  // getBooks = () => {
  //   API.getBooks(this.state.q)
  //     .then(res =>
  //       this.setState({
  //         books: res.data
  //       })
  //     )
  //     .catch(() =>
  //       this.setState({
  //         books: [],
  //         message: "No New Books Found, Try a Different Query"
  //       })
  //     );
  // };

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
      image: book.volumeInfo.image,
      link: book.volumeInfo.link
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
        <Results
          books={this.state.books}
          // id={this.state.id}
          // title={this.state.title}
          // authors={this.state.authors}
          // description={this.state.description}
          // image={this.state.image}
          // link={this.state.link}
        />
        <Footer />
      </div>
      // {this.state.recipes.map((recipe) => {
      //   return (
      //     <RecipeListItem
      //       key={recipe.id}
      //       title={recipe.title}
      //       // href={recipe.volumeInfo.infoLink}
      //       ingredients={recipe.synopsis}
      //       // thumbnail={recipe.volumeInfo.imageLinks.smallThumbnail}
      //     />
      //   );
      // })}
    );
  }
}

export default Books;
