import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components imports
import Home from "./Components/Home";
import CountryDetail from "./Components/CountryDetail";
import countriesList from './countries.json'
import './App.css';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={(props) => <Home data={countriesList} {...props}/>}/>
        <Route exact path="/:id" render={(props) => <CountryDetail data={countriesList} {...props}/>}/>
      </Switch>
  
    </div>
  );
}

export default App;
