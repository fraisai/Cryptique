const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username."],
        unique: [true, "Username already exists"],
        maxLength: 255
    },
    email: { 
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "Email already exists"],
        maxLength: 255
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
        maxLength: 255
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
export const User = mongoose.model.Users || mongoose.model("Users", UserSchema);
