import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./components/NotFound";
import Converter from "../src/components/Converter";
import ProtectedRoute from '../src/components/ProtectedRoute'
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Converter } />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route path="/" component={NotFound} />
            </Switch>
            </Router>
      
    </div>
  );
}
