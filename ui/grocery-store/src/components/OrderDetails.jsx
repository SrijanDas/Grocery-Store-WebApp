import React from "react";

function OrderDetails({ match }) {
  return (
    <div className="orderDetailsTable">
      <div className="orderDetailsTable__container">
        <h1>Order Details of {match.params.id}</h1>
      </div>
    </div>
  );
}

export default OrderDetails;
