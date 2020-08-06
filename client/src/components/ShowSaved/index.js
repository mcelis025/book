import React from "react";

function ShowSaved() {

  const style = {
    width: "200px"
  }

  return (

    <div className="container border border-dark pt-3 pb-3">
      <h2>Saved Books</h2>
      <br />
      <div className="container border border-dark pt-3 pb-3">
  	    <div className="row">
          <h4 className="col-lg-6">Book Title </h4>
          <div className="container col-lg-6">
            <button type="button" className="btn btn-danger float-right ml-1">Delete</button>
            <button type="button" className="btn btn-primary float-right">View</button>
          </div>
        </div>
        <h4>Written By </h4>
        <div className="container mt-4">
          <div className="media mt-3 mb-3">
            <img src="img_avatar1.png" className="align-self-center mr-3" style={style} alt=""></img>
            <div className="media-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ShowSaved;
