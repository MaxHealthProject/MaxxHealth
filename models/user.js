var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: {type: Boolean, default: false},

    mobileNo: String,
    address: {
        addressLine: String,
        city: String,
        state: String,
        zip: String
    },

    cart: [
        {
            _id: false,
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: Number,
            totalAmount: Number
        }
    ],
    
    cartAmount: {type: Number, default: 0} 
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", userSchema);

module.exports = User;