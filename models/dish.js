const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        vegetarian: { type: Boolean, required: true },
        allergens: [{ type: Schema.Types.ObjectId, ref: "Allergen" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Dish", dishSchema);
