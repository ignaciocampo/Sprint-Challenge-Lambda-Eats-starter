
import React from 'react'


const Card = props => {
  return (
    <div className="new-pizza">
      {props.newPizza.map(pizza => (
        <div className="pizza" key={pizza.id}>
          <h2>{pizza.name}</h2>
          <p>{pizza.size}</p>
          <p>{pizza.bacon}</p>
          <p>{pizza.onion}</p>
          <p>{pizza.tomatoe}</p>
          <p>{pizza.pepperoni}</p>
          <p>{pizza.glutenFree}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;

// id: 1,
// name:"",
// size:"",
// bacon: false,
// onion: false,
// tomatoe: false,
// pepperoni: false,
// glutenFree: false