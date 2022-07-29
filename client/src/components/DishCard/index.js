import React from "react";
import "./style.css";

function DishCard(props) {
  let { allergens, name, price, description, vegetarian } = props.dish;
  return (
    <div className='card'>
      <div>

        <h2>
          {name} {vegetarian ? "*" : null}
        </h2>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
}

export default DishCard;
