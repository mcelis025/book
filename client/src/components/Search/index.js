import React from "react";

function Search(props) {
  return (

    <div className="container mt-3">
      <h4 className="mb-3">Book Search</h4>
      <div className="input-group mb-3">
  <input 
    type="text" 
    className="form-control" 
    name="searchBook"
    placeholder="Search" 
    value={props.searchBook}
    onChange={props.handleInputChange}
  ></input>
        <div className="input-group-append">
          <button 
            className="btn btn-success" 
            type="submit"
            onClick={props.handleFormSubmit}
            >Go</button>  
        </div>
      </div>
    </div>
  );
}

export default Search;
