import React from "react";

function OrderDetails({ order }) {
  const orderDetails = order.order_details;
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => console.log("Go back")}
          >
            &larr; Go Back
          </button>
          <h1 className="fw-light my-3">Order Details</h1>
          <hr />
          {/* <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product Name</th>
                <th scope="col">Price per unit</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Cost</th>
              </tr>
            </thead>
            <tbody> */}
          {orderDetails.map(
            (detail) => console.log(detail)

            // <tr>
            //   <th scope="row">{detail.order_id}</th>
            //   <td>{detail.product_name}</td>
            //   <td>{detail.price_per_unit}</td>
            //   <td>{detail.quantity}</td>
            //   <td>{detail.total_price}</td>
            // </tr>
          )}
          {/* </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
