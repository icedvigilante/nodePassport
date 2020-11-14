const mongoose = require('mongoose');
const UserSchema = new Mongoose.Schema({
    name: {

        type: String,
        required: True

    },
    email: {

        type: String,
        required: True

    },
    password: {

        type: String,
        required: True

    },
    date: {

        type: date,
        default: Date.now

    }
})

const User = mongoose. model('User', UserSchema);
module.exports = User;