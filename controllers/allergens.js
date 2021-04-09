const db = require("../db");
const Allergen = require("../models/allergen.js");

db.on("error", console.error.bind(console, "error"));

// CRUD

// see all allergens
// display all dishes with an allergen

const getAllAllergens = async (req, res) => {
    try {
        const allergens = await Allergen.find({});
        return res.status(200).json(allergens);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getOneAllergen = async (req, res) => {
    try {
        const allergen = await Allergen.findById(req.params.id).populate(
            "dishes"
        );
        if (!allergen) {
            return res.status(404).send("Allergen not found");
        }
        return res.status(200).json(allergen);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllAllergens,
    getOneAllergen,
};
