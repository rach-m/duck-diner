import axios from "axios";
const apiURL = "http://localhost:4567/api";

export const getDishes = async () => {
    const response = await axios.get(`${apiURL}/dishes`);
    const dishes = response.data;
    return dishes;
};

export const getAllergens = async () => {
    const response = await axios.get(`${apiURL}/allergens`);
    const allergens = response.data;
    return allergens;
};

export const getDish = async (id) => {
    const response = await axios.get(`${apiURL}/dishes/${id}`);
    const dish = response.data;
    return dish;
};
export const getAllergen = async (id) => {
    const response = await axios.get(`${apiURL}/allergens/${id}`);
    const allergen = response.data;
    return allergen;
};

export const createDish = async (dish) => {
    const response = axios.post(`${apiURL}/dishes`, dish);
    return response.data;
};
