'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = _mongoose2.default.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Customer', 'Staff', 'Manager', 'Admin'],
        default: 'Customer'
    },
    profile: {
        firstName: String,
        lastName: String
    },
    phone: String,
    resetPassword: {
        token: String,
        expires: Date
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    stripe: {
        customerId: String,
        brand: String,
        last4: String,
        exp_month: Number,
        exp_year: Number
    }
}, {
    timestamps: true
});

// Pre-save of user to database, hash password if password is modified or new
userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();

    var SALT_FACTOR = 5;
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

// Method to compare password for login
userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
// create the model for users and expose it to our app
module.exports = _mongoose2.default.model('User', userSchema);