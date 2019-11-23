const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var UserSchema = Schema({
        bolsones: String,
        marca: String,
        color: String,
        impermiable:String,
        precio:String,
    });

module.exports = mongoose.model("User", UserSchema);