import React from "react";
import Order from "./Order";

function Orders({ orders, viewDetails }) {
  return (
    <div className="card">
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order No</th>
              <th scope="col">Date</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Total Cost</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order
                key={order.order_id}
                order={order}
                viewDetails={viewDetails}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
