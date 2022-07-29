import { useState, useEffect } from "react";
import { getAllergens, createDish } from "../../services";
import { useHistory } from "react-router-dom";
import "./style.css"
function CreateDish() {
  let [allergens, setAllergens] = useState([]);
  let [dish, setDish] = useState({
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    allergens: [],
  });
  const history = useHistory();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await getAllergens();
    setAllergens(data);
  }

  function handleChange(event) {
    let { id, value } = event.target;
    setDish((prevState) => {
      return { ...prevState, [id]: value };
    });
  }

  function handleAllergenChange(event) {
    //if checked add to array if not remove from array
    console.dir(event.target.checked);
    if (event.target.checked) {
      setDish((prevState) => {
        let arr = [...prevState.allergens, event.target.value];
        return { ...prevState, allergens: arr };
      });
    } else {
      setDish((prevState) => {
        let index = prevState.allergens.indexOf(event.target.value);
        let arr = prevState.allergens.slice();
        arr.splice(index, 1);
        return { ...prevState, allergens: arr };
      });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await setDish((prevState) => {
      let price = Number(prevState.price);
      let vegetarian = prevState.vegetarian === "true";

      return { ...prevState, price, vegetarian };
    });

    await createDish(dish);
    history.push("/");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          onChange={handleChange}
          value={dish.name}
        />
        <label htmlFor='price'>Price</label>
        <input
          type='number'
          id='price'
          onChange={handleChange}
          value={dish.price}
        />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          id='description'
          onChange={handleChange}
          value={dish.description}
        />
        <div>
          <input
            type='radio'
            name='veggie'
            onChange={handleChange}
            value={true}
            id='vegetarian'></input>
          <label htmlFor='vegetarian'>Is Vegetarian</label>
          <input
            type='radio'
            name='veggie'
            onChange={handleChange}
            value={false}
            id='vegetarian'></input>
          <label htmlFor='vegetarian'>Is Not Vegetarian</label>
        </div>
        <div>

          <h4>Allergens?</h4>
          {allergens.map((allergen) => {
            return (
              <div key={allergen._id}>
                <label htmlFor='allergen'>{allergen.name}</label>
                <input
                  type='checkbox'
                  className='allergen'
                  value={allergen.name}
                  onChange={handleAllergenChange}
                />
              </div>
            );
          })}
        </div>
        <input type='submit' />
      </form>
    </div>
  );
}

export default CreateDish;
