import React from "react";

function Search() {
  return (

    <div class="container mt-3">
      <h4 class="mb-3">Book Search</h4>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search"></input>
        <div class="input-group-append">
          <button class="btn btn-success" type="submit">Go</button>  
        </div>
      </div>
    </div>
  );
}

export default Search;
