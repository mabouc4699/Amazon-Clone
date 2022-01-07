import React, { useEffect } from "react";
import * as actions from "./actions";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JQwdDKg3X64UbB3HA3vr2kT4ESA9NiTPolIm4cOpezEHrZfBv1qeVnrd4NLRkJQ3rOMnIBuM7ZaWBFanbtIG8Eq00HonRjSdI"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User just logged in / Was logged in
        dispatch(actions.setUser(authUser));
      } else {
        // User is logged out
        dispatch(actions.setUser(null));
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
