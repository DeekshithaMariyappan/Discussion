const mdb = require('mongoose');
const postFoodSchema = mdb.Schema({
    Foodtitle: String,
    Foodcontent: String,
    FooduserId: String,
    createdAt: { type: Date, default: Date.now }
})

const post2_schema = mdb.model("post2", postFoodSchema);
module.exports = post2_schema;
