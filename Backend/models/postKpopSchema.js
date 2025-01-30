const mdb = require('mongoose');
const postKpopSchema = mdb.Schema({
    Kpoptitle: String,
    Kpopcontent: String,
    KpopuserId: String,
    createdAt: { type: Date, default: Date.now }
})

const post4_schema = mdb.model("post4", postKpopSchema);
module.exports = post4_schema;
