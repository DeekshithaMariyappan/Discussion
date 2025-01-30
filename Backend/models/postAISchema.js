const mdb = require('mongoose');
const postAISchema = mdb.Schema({
    AItitle: String,
    AIcontent: String,
    AIuserID: String,
    createdAt: { type: Date, default: Date.now }
})

const post1_schema = mdb.model("post1", postAISchema);
module.exports = post1_schema;
