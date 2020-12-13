import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  //Piece of code which runs based on a given condition
  //useEffect <<<<<<<< POWERFUL

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in...
        dispatch ({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User is logged out...
        dispatch ({
        type: "SET_USER",
        user: null,
        });
      }
    });

    console.log("USER IS  >> ", user);

    return () => {
      //Any cleanup operations go in here...
      unsubscribe();
    }
  }, []);


  return (
    <Router>
    <div className="app">
      <Switch>

        <Route path="/checkout">
          <Header />
            <Checkout />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        {/* This is the default route */}
        <Route path="/">
            <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

 {/* we NEED React-ROUTER */}
    

      {/* localhost.com/ */}
      {/* localhost.com/checkout */}
      {/* localhost.com/login */}

export default App;
