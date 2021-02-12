import "./App.css";
import Nav from "./components/Nav";
import OrderTable from "./components/OrderTable";
import TopCard from "./components/TopCard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OrderDetails from "./components/OrderDetails";
import AllOrders from "./components/AllOrders";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Nav */}
        <Nav />
        {/* Cards */}
        <TopCard />
        <Switch>
          <Route path="/" exact component={OrderTable} />
          <Route path="/orderDetails/:id" exact component={OrderDetails} />
          <Route path="/allOrders" exact component={AllOrders} />
          <Route path="/allProducts" exact component={Products} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
