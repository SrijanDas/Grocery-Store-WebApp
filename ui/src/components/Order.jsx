import React from "react";

function Order({ order, viewDetails }) {
  return (
    <tr>
      <th scope="row">{order.order_id}</th>
      <td>{order.datetime}</td>
      <td>{order.customer_name}</td>
      <td>{order.total}</td>
      <td>
        <button
          type="button"
          className="btn btn-light btn-sm"
          onClick={() => viewDetails(order.order_id)}
        >
          view details
        </button>
      </td>
    </tr>
  );
}

export default Order;
