const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/** Scheme **/
const PartnerScheme = new mongoose.Schema(
    {
        name: String,
        password: String,
        email: {
            type: String,
            index: { unique: true }
        },
        city: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

/** Methods **/
const comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, callback);
}

PartnerScheme.methods = {
    comparePassword
}

/** Hooks */
PartnerScheme.pre('save', function(next) {

    const partner = this;
    const SALT_FACTOR = 10;

    if (!partner.isModified('password')) return next();

     return bcrypt.genSalt(SALT_FACTOR, (err, salt) => {

         if(err) return next(err);

         return bcrypt.hash(partner.password, salt, (err, hash) => {
             partner.password = hash;
             return next();
         })
     })
})

module.exports = mongoose.model('Partner', PartnerScheme);
