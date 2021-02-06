import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
