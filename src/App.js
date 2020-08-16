import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import CategoryList from './components/CategoryList'

function App() {
  return (
    <div>
      <Link to={`/home`}><h1>Star Wars</h1></Link>
      <CategoryList url="https://swapi.dev/api/?format=json"/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/category/:name" component={Category}/>
      </Switch>
    </div>
  )  
}

export default App;
