const {
    getAllAllergens,
    getOneAllergen,
} = require("../controllers/allergens.js");
const {
    getDish,
    getAllDishes,
    createDish,
} = require("../controllers/dishes.js");
const { Router } = require("express");
const router = Router();

router.get("/allergens", getAllAllergens);
router.get("/allergens/:id", getOneAllergen);

router.get("/dishes", getAllDishes);
router.get("/dishes/:id", getDish);
router.post("/dishes", createDish);

module.exports = router;
