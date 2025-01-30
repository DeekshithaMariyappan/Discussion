const mdb = require('mongoose');
const postTechSchema = mdb.Schema({
    title: String,
    content: String,
    userId:String,
    createdAt: { type: Date, default: Date.now }
})

const post_schema = mdb.model("post", postTechSchema);
module.exports = post_schema;
