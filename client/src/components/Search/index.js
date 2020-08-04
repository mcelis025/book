import React from "react";

function Search() {
  return (

    <div className="container mt-3">
      <h4 className="mb-3">Book Search</h4>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search"></input>
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">Go</button>  
        </div>
      </div>
    </div>
  );
}

export default Search;
