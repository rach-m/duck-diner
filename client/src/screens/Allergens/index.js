import React, { useEffect, useState } from "react";
import { getAllergens } from "../../services";

function Allergens(props) {
  let [allergens, setAllergens] = useState()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let data = await getAllergens();
    setAllergens(data);

  }

  return <div>{allergens ? allergens.map(allergen => {
    return <li key={allergen._id}>{allergen.name}</li>
  }) : null}</div>;
}

export default Allergens;
