import React, { useState } from 'react';
import ReactDOM from "react-dom";  
import * as yup from "yup";
import axios from "axios";



const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  bacon: yup.boolean().oneOf([true], "Please agree to terms of use"),
  onion: yup.boolean().oneOf([true], "Please agree to terms of use"),
  tomatoe: yup.boolean().oneOf([true], "Please agree to terms of use"),
  pepperoni: yup.boolean().oneOf([true], "Please agree to terms of use"),
  size: yup.string(),
}); 

const PizzaForm = props => {
  const [pizzaData, setPizzaData] = useState({
    id: 1,
   name:"",
   size:"",
   bacon: false,
   onion: false,
   tomatoe: false,
   pepperoni: false,
   glutenFree: false

  });
  const [errorState, setErrorState] = useState({
    id: 1,
    name:"",
    size:"",
    bacon: false,
    onion: false,
    tomatoe: false,
    pepperoni: false,
    glutenFree: false
  });

  const [users, setUsers] = useState([]);

  // const [toppings, setTopping] = useState({
  //   bacon: false,
  //   onion: false,
  //   tomatoe: false,
  //   pepperoni: false
  // })


  const clearForm = () => {
    setPizzaData({ id: Date.now(), title: '', body: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(pizzaData);
    clearForm();
    axios
    .post("https://reqres.in/api/users", pizzaData)
    .then(response =>  setUsers([...users, response.data]))
    .catch(err => console.log(err));
  };
  
  const validate = (event, value) =>{
    yup
    .reach(formSchema, event.target.name)
    .validate(value)
    .then(valid => {
        setErrorState({
            ...errorState,
            [event.target.name]: ""
          });
    })
    .catch(err => {
        console.log(err.errors)
        setErrorState({
            ...errorState,
            [event.target.name]: err.errors[0]
          });
    })
  }
  

  const handleChange = (event) => {
    event.persist() 
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    validate(event,value);
    setPizzaData({ ...pizzaData, [event.target.name]: event.target.value });
  };

  return (
 
    <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name:</label>
          <input className="name-input"
            id="name"
            type="text"
            name="name"
            placeholder="Please Enter Your Name:"
            value={pizzaData.name}
            onChange={handleChange}
          />
     {errorState.name.length > 2 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
        <label/>
      <label htmlFor="pizza-size">
        Choice of Size
        <select
          value={pizzaData.size}
          name="size"
          id="size"
          onChange={handleChange}
        >
          <option value="small">Small Pizza: 8-10 inches with 6 slices.</option>
          <option value="medium">Medium Pizza: 12 inches with 8 slices.</option>
          <option value="large">Large Pizza: 14 inch with 10 slices.</option>
          <option value="extra-large">Extra-large Pizza: 16-18 inch with 12 slices.</option>
        </select>
      </label>
      <div className="bacon">
      <h3>Toppings</h3>
      <label htmlFor="terms">
      <p>Bacon</p>
        <input className='checkbox'

          type="checkbox"
          id=""
          name="bacon"
          checked={pizzaData.bacon}
          onChange={handleChange}
          value='bacon'
        />
        </label>
        <label htmlFor="tomatoe">
           <p>Tomatoe</p>
        <input className='checkbox'
          type="checkbox"
          id=""
          name="tomatoe"
          checked={pizzaData.tomatoe}
          onChange={handleChange}
          value='tomatoe'
        />
        </label>
        <label htmlFor="onions">
        <p>Onion</p>
        <input className='checkbox'
         type="checkbox"
         id=""
         name="onion"
          checked={pizzaData.onion}
          onChange={handleChange}
          value='onion'
        />
        </label>
        <label htmlFor="pepperoni">
        <p>Pepperoni</p>
        <input className='checkbox'
         type="checkbox"
         id=""
         name="pepperoni"
          checked={pizzaData.pepperoni}
          onChange={handleChange}
          value='pepperoni'
        />
        </label>
        
        </div>
          <button className='submit-button'
          type="submit">Click To Submit!</button>
 
    </form>

    
  );
}
export default PizzaForm