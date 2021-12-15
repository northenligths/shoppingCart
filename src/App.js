import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes, Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
