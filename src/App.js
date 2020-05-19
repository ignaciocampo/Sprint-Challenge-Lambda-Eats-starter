
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as  Route, Link, Switch } from "react-router-dom";
import PizzaForm from './PizzaForm'
import { useHistory } from "react-router-dom";
import Card from "./Card"
import Home from './Home'
import Pizza from './Pizza'

const App = (props) => {
  const [pizza, setPizza] = useState([]);
  // const [newPizza, setNewPizza] = useState([
  //   {
  //     id: 1,
  //     name:"",
  //     size:"",
  //     bacon: false,
  //     onion: false,
  //     tomatoe: false,
  //     pepperoni: false,
  //     glutenFree: false
  //     }

  // ]);

  // const handleSubmit = (newestPizza) => {
  //   setNewPizza([...newPizza, newestPizza]);
  // }
  const history = useHistory();

  return (

<div className='app'>
    <nav>
    <h1 className="pizza-header">Lambda Pizzas</h1>
    <div className="nav-links">
    <li><Link to="/">Home</Link></li> 
    <li>  <Link to="/pizza">Build your Pizza</Link></li>
    </div>
  </nav>
  
<Switch>
  <Route exact path="/" component={Home}>
    <Home ourOwnProps={"asdfdsaf"} />
  </Route>
  <Route path="/pizza" component={Pizza}>
    <Pizza></Pizza>
  </Route>
  </Switch>
      </div>
    );
  }
export default App;
