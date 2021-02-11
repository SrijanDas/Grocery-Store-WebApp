import React from "react";
import "../styles/Nav.css";
import ListAltIcon from "@material-ui/icons/ListAlt";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar__icons">
        <IconButton className="order__icon">
          <ListAltIcon fontSize="large" />
        </IconButton>
        <IconButton className="product__icon">
          <ShoppingCartIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Nav;
