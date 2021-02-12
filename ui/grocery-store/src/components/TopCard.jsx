import React, { useState } from "react";
import "../styles/TopCard.css";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import OrderForm from "./OrderForm";

function TopCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="topCard">
      <h2 className="topCard__title">Grocery Store Management System</h2>
      <div className="topCard__buttons">
        <Button className="manage_products" variant="contained" color="primary">
          Manage Products
        </Button>
        <Button
          onClick={handleOpen}
          className="new_order"
          variant="contained"
          color="primary"
        >
          New Order
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <OrderForm />
      </Modal>
    </div>
  );
}

export default TopCard;
