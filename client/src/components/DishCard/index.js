import React from "react";
import "./style.css";

function DishCard(props) {
    let { allergens, name, price, description, vegetarian } = props.dish;
    return (
        <div className='card'>
            <div>
                <h4>
                    {name} {vegetarian ? "*" : null}
                </h4>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default DishCard;
