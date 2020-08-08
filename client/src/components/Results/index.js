import React from "react";

function Results(props) {
  const style = {
    width: "200px",
  };

  return (
    <div className="container border border-dark pt-3 pb-3">
      <h2>Results</h2>
      <br />
      <div className="container border border-dark pt-3 pb-3">
        <div className="row">
          <h4 className="col-lg-6">{props.title}</h4>
          <div className="container col-lg-6">
            <button
              type="button"
              onClick={props.handleSave}
              className="btn btn-success float-right ml-1"
            >
              Save
            </button>
            <button type="button" target="_blank" className="btn btn-primary float-right">
              <a href={props.link}>View</a>
            </button>
          </div>
        </div>
        <h4>Written By {props.authors}</h4>
        <div className="container mt-4">
          <div className="media mt-3 mb-3">
            <img
              src={props.image}
              className="align-self-center mr-3"
              style={style}
              alt={props.title}
            ></img>
            <div className="media-body">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
