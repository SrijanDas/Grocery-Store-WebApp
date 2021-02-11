import { Button } from "@material-ui/core";
import React from "react";
import "../styles/OrderCard.css";
import OrderTable from "./OrderTable";

function Card() {
  return (
    <div className="orderCard">
      <h2 className="orderCard__title">Grocery Store Management System</h2>
      <div className="orderCard__buttons">
        <Button className="manage_products" variant="contained" color="primary">
          Manage Products
        </Button>
        <Button className="new_order" variant="contained" color="primary">
          New Order
        </Button>
      </div>
      <OrderTable />
    </div>
  );
}

export default Card;
