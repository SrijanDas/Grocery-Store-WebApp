import React from "react";
import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="fw-light my-3">Grocery Store Management System</h5>
      </div>
      <div className="card-body">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button color="primary" text="Manage Products" />
          <Button color="primary" text="New Order" />
        </div>
      </div>
    </div>
  );
}

export default Card;
