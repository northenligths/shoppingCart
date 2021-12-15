import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
