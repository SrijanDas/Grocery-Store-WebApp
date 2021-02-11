import "./App.css";
import Nav from "./components/Nav";
import OrderCard from "./components/OrderCard";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Card */}
      <OrderCard />
    </div>
  );
}

export default App;
