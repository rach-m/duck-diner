const db = require("../db");
const Dish = require("../models/dish.js");
const Allergen = require("../models/allergen.js");

db.on("error", console.error.bind(console, "MongoDb Connection Error:"));

const main = async () => {
    await Dish.deleteMany({});
    await Allergen.deleteMany({});

    const dishes = [
        {
            name: "Lasagna",
            price: 15,
            description: "Ooey Gooey Cheesy!",
            vegetarian: false,
            allergens: ["dairy", "gluten", "allium"],
        },
        {
            name: "Blood Orange Salad",
            price: 1000000000,
            description: "For the 700 years olds among us",
            vegetarian: true,
            allergens: ["nightshade", "almond"],
        },
        {
            name: "Pad Thai",
            price: 20,
            description: "Spicy Creamy Noodles",
            vegetarian: false,
            allergens: ["peanut", "chili", "rice"],
        },
    ];

    const allergen = [
        { name: "dairy", popularity: 9, dishes: [] },
        { name: "gluten", popularity: 10, dishes: [] },
        { name: "allium", popularity: 6, dishes: [] },
        { name: "nightshade", popularity: 7, dishes: [] },
        { name: "almond", popularity: 5, dishes: [] },
        { name: "peanut", popularity: 8, dishes: [] },
        { name: "chili", popularity: 4, dishes: [] },
        { name: "rice", popularity: 2, dishes: [] },
    ];

    try {
        await Allergen.insertMany(allergen);

        await Promise.all(
            dishes.map(async (dish) => {
                let { name, price, description, vegetarian, allergens } = dish;
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
            })
        );
    } catch (error) {
        console.error(error)
    }
};

const run = async () => {
    await main();
    db.close();
};

run();
