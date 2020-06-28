import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import About from './components/About';
import AlStats from './components/ApexLegends/AlStats';
import CompareStats from './components/ApexLegends/CompareStats';
import ErrorBoundary from './components/ApexLegends/ErrorBoundary';

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <AppNavbar />
          
          <Switch>

            <Route exact path="/" component={AlStats} />
            <Route path="/about" component={About} />
            <Route exact path="/compare" component={CompareStats} />
          
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
