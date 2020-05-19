import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  console.log(props);
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://images.squarespace-cdn.com/content/v1/52ae5d29e4b0dbce9d21a310/1588361966648-QLCLVU8MOFDGTQW588L8/ke17ZwdGBToddI8pDm48kDFgITcRoterXoQdllT5ciUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcV7ZyRJyI8bwZiMJRrgPaAKqUaXS0tb9q_dTyNVba_kClt3J5x-w6oTQbPni4jzRa/pizza.jpg?format=2500w"
        alt=""
      />
   
    </div>
  );
}

export default Home;
