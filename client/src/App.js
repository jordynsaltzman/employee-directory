import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="wrapperDiv">
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
