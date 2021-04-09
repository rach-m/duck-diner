import { useState, useEffect } from "react";
import DishCardContainer from "../../components/DishCardContainer";
import { getDishes } from "../../services";

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
        <div>
            <DishCardContainer dishes={dishes} />
        </div>
    );
}

export default Dishes;
