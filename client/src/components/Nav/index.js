import React from "react";

function Nav() {
  return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a className="navbar-brand" href="/">G.B.S.</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/SearchBooks">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/SavedBooks">Saved</a>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;
