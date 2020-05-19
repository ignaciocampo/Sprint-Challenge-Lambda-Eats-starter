
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as  Route, Link } from "react-router-dom";
import PizzaForm from './PizzaForm'
import { useHistory } from "react-router-dom";
import Card from "./Card"
import Home from './Home'




function Pizzas(props){
    const [newPizza, setNewPizza] = useState([
        {
          id: 1,
          name:"",
          size:"",
          bacon: false,
          onion: false,
          tomatoe: false,
          pepperoni: false,
          glutenFree: false
          }
    
      ]);
    
      const handleSubmit = (newestPizza) => {
        setNewPizza([...newPizza, newestPizza]);
      }

      const history = useHistory();
    return(
        
        <div className="pizza-form">
        <h1>Pizza Builder!</h1>
       <div>
       <PizzaForm onSubmit={handleSubmit}/>
        <Card newPizza={newPizza}/>
       </div>
    
      
      
      </div>
   
    )
}
export default Pizzas