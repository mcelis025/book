import React, { Component } from "react";

class Results extends Component {
  render() {

    const style = {
      width: "200px",
    };

    return this.props.books.map((book) => (
      <div className="container border border-dark pt-3 pb-3">
        <h2>Results</h2>
        <br />
        <div className="container border border-dark pt-3 pb-3">
          <div className="row">
            <h4 className="col-lg-6">{this.props.title}</h4>
            <div className="container col-lg-6">
              <button
                type="button"
                onClick={this.handleBookSave.bind (this, book.id)}                
                className="btn btn-success float-right ml-1"
              >
                Save
              </button>
              <button type="button" className="btn btn-primary float-right">
                <a href={this.props.link}>View</a>
              </button>
            </div>
          </div>
          <h4>{this.props.authors}</h4>
          <div className="container mt-4">
            <div className="media mt-3 mb-3">
              <img
                src={this.props.image}
                className="align-self-center mr-3"
                style={style}
                alt={this.props.title}
              ></img>
              <div className="media-body">
                <p>
                  {this.props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}

export default Results;
