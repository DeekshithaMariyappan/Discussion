const mdb = require('mongoose');
const postMusicSchema = mdb.Schema({
    Musictitle: String,
    Musiccontent: String,
    MusicuserId: String,
    createdAt: { type: Date, default: Date.now }
})

const post3_schema = mdb.model("post3", postMusicSchema);
module.exports = post3_schema;
