import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Landing from "./components/LandingForm";
import Player from "./components/Player";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component={Landing}/>
        <Route exact path = "/player" component={Player}/>
      </Router>

    </div>
  );
}

export default App;
