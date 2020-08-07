import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h4 className="mb-3">Book Search</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="searchBook"
            placeholder="Search"
            value={this.props.searchBook}
            onChange={this.props.handleInputChange}
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="submit"
              onClick={this.props.handleFormSubmit}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
