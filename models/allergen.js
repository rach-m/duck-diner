const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allergenSchema = new Schema(
    {
        name: { type: String, required: true },
        popularity: { 
            type: Number, 
            required: true,
            min: [1, "Popularity value too low."],
            max: [10, "Popularity value too high."]
         },
        dishes: [{ type: Schema.Types.ObjectId, ref: "Dish" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Allergen", allergenSchema);
