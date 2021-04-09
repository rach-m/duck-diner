const { restart } = require("nodemon");
const db = require("../db");
const Allergen = require("../models/allergen.js");
const Dish = require("../models/dish.js");

db.on("error", console.error.bind(console, "error"));

// get all dishes

const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find({}).populate("allergens");
        return res.status(200).json(dishes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// get one dish

const getDish = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id).populate("allergens");
        return res.status(200).json(dish);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// create a dish - go through allergens check if they exist
// inside our db if yes add the dish to that allergen if no create the
// allergen and add the dish

const createDish = async (req, res) => {
    try {
        let { name, price, description, vegetarian, allergens } = req.body;
        let newDish = new Dish({
            name,
            price,
            description,
            vegetarian,
            allergens: [],
        });

        await Promise.all(
            allergens.map(async (allergen) => {
                let foundAllergen = await Allergen.findOne({
                    name: allergen,
                });
                newDish.allergens.push(foundAllergen._id);
                return foundAllergen;
            })
        );

        let createdDish = await newDish.save();

        await Promise.all(
            createdDish.allergens.map(async (allergen) => {
                let foundAllergen = await Allergen.findById(allergen);

                foundAllergen.dishes.push(createdDish);
                await foundAllergen.save();
            })
        );

        return res.status(201).send("Dish Created!");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
// update a dish - update the allergens then we need to update any changes to allergens

// delete a dish - go through allergens and delete the dish from each allergen

module.exports = {
    getDish,
    getAllDishes,
    createDish,
};
