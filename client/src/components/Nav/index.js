import React from "react";

function Nav() {
  return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a class="navbar-brand" href="/">Logo</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/SearchBooks">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/SavedBooks">Saved</a>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;
