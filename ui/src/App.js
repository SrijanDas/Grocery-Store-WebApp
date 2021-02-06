import "./App.css";
import { useState, useEffect } from "react/cjs/react.development";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Orders from "./components/Orders";
import OrderDetails from "./components/OrderDetails";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getAllOrders")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setOrders(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // View order details
  const viewOrderDetails = (id) => {
    setOrders(orders.filter((order) => order.order_id === id));
    // console.log(id);
    return (
      <div>
        <h1>Details</h1>
      </div>
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Card orders={orders} />
          <Orders viewDetails={viewOrderDetails} orders={orders} />
        </div>
      </div>
    );
  }
}

export default App;
