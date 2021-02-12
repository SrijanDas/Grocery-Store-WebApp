import React, { useEffect, useState } from "react";
import "../styles/OrderTable.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "../axios";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function OrderTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    await axios.get("/getAllOrders").then((res) => {
      setOrders(res.data);
    });
  };

  return (
    <div className="orderTable">
      <TableContainer className="orderTable__container">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell align="right">
                <b>Order Number</b>
              </TableCell>
              <TableCell align="right">
                <b>Customer Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Total Cost</b>
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.order_id}>
                <TableCell component="th" scope="row">
                  {order.datetime}
                </TableCell>
                <TableCell align="right">{order.order_id}</TableCell>
                <TableCell align="right">{order.customer_name}</TableCell>
                <TableCell align="right">{order.total}</TableCell>
                <TableCell align="right">
                  <Link
                    className="orderTable__link"
                    to={`/orderDetails/${order.order_id}`}
                  >
                    <Button variant="outlined" size="small" color="primary">
                      Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default OrderTable;
