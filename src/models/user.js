const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Please provide a valid email');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0){
                throw new Error('Please provide positive number for age')
            }
        }
    },    
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.includes('password')){
                throw new Error('Password must not contains "password" ');
            }
        }
    }    
});

userSchema.pre('save', async function(next) {
    const user = this;

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    // try {
    //     console.log('just before saving!')
    // } catch (e) {
    //     console.log('Error:>', e)
    // }
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;