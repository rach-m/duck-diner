import { useEffect, useState } from "react";
import { getDish } from "../../services";
import { useParams } from "react-router-dom";
import "./style.css"

function Dish() {
  let [dish, setDish] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await getDish(id);
    setDish(data);
  }

  return (
    <div className="dishcontainer">
      <div>
        <h4>
          {dish.name} {dish.vegetarian ? "*" : null}
        </h4>
        <h6>{dish.description}</h6>

        <p>${dish.price}</p>
      </div>
      <p>DISH ALLERGENS</p>
      <ul>
        {dish.allergens &&
          dish.allergens.map((allergen) => {
            return <li key={allergen._id}>{allergen.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Dish;
