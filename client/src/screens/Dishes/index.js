import { useState, useEffect } from "react";
import DishCardContainer from "../../components/DishCardContainer";
import { getDishes } from "../../services";
import "./style.css"

function Dishes() {
  let [dishes, setDishes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await getDishes();
    setDishes(data);
  }

  return (
    <div className="dishes">
      <DishCardContainer dishes={dishes} />
      <p style={{ color: "white" }}>* Indicates vegetarian dish</p>
    </div >
  );
}

export default Dishes;
