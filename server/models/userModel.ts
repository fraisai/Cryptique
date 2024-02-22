const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username."],
        unique: [true, "Username already exists"]
    },
    email: { 
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false
    },
    investing: {
        type: Number, 
        default: 0
    }, 
    date_created: {
        type: Date,
        default: Date.now
    }
})


// create a user table or collection if there is no table with that name already
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
