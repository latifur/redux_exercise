import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { store } from "./redux/store";
import ShowAllPhones from "./component/showAllPhone";
import ShowAllRooms from "./component/showAllRooms";
import AppNavbar from "./component/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import CartPage from "./pages/cart";
import ProductDetails from "./pages/productDetails";
import "./App.css";

const Error = () => {
  return (
    <h1>
      Page is not Found, return to <Link to="/">Home</Link>
    </h1>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppNavbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/phones" exact component={ShowAllPhones} />
        <Route path="/rooms" exact component={ShowAllRooms} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/details/:slug" exact component={ProductDetails} />
        <Route component={Error} />
      </Switch>
    </Provider>
  );
}

export default App;
