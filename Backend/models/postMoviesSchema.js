const mdb = require('mongoose');
const postMoviesSchema = mdb.Schema({
    Moviestitle: String,
    Moviescontent: String,
    MoviesuserID: String,
    createdAt: { type: Date, default: Date.now }
})

const post5_schema = mdb.model("post5", postMoviesSchema);
module.exports = post5_schema;
