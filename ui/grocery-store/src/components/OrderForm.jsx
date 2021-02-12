import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/OrderForm.css";
import { makeStyles } from "@material-ui/core/styles";

function OrderForm() {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="orderForm">
      <h2>Add a new Order</h2>
      <form className="orderForm__container" action="">
        <TextField
          fullWidth
          className="orderForm__customerName"
          label="Customer Name"
        />
        <div className="orderForm__row">
          <TextField
            classNmae="orderForm__products"
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your currency"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className="orderForm__qty"
            type="number"
            label="Qty."
            variant="outlined"
          />
        </div>
      </form>
      <Button className="" variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
}

export default OrderForm;
