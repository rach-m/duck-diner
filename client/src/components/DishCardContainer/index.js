import React from "react";
import DishCard from "../DishCard";
import "./style.css";
import { Link } from "react-router-dom";

function DishCardContainer(props) {
    return (
        <div className='container'>
            {props.dishes.map((dish) => {
                return (
                    <Link to={`/dishes/${dish._id}`} key={dish._id}>
                        <DishCard dish={dish} />
                    </Link>
                );
            })}
        </div>
    );
}

export default DishCardContainer;
