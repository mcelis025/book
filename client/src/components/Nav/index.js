import React from "react";

function Nav() {
  return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;
