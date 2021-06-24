import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import LandingPage from './LandingPage'
import About from './About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

//loads stripe and stores it into a promise
const promise = loadStripe("pk_test_51J2ACtHI24BKleyffCVEQopnZWSWcNgLZdJiCG5XAMTRQ8UjXMhf2Kn9ziE9B3M1YMgN5jc4f1QXKIDsL4Jze1Op00992qvQ8e");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the component loads
    //keeps track of who is signed in, is a listener
    auth.onAuthStateChanged(authUser => {
      console.log('The user is .>>>', authUser);

      if (authUser) {
        //the user just logged in / the user was logged in 
        //even if you refresh the page you'll still remain logged in, it won't log you out
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      };
    });
  }, []);

  return (
    // BEM
  <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/landingPage">
          <Header />
          <LandingPage />
        </Route>
        <Route path="/about">
          <Header />
          <About />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}> {/* wraps the payment element */}
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
