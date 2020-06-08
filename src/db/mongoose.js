const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
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

// const me = new User({
//     name: '  Gurpreet   ',
//     age: 20,
//     email: 'abcd@gamil.com',
//     password: 'pass',

// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const newTask = new Task({
    description: '    Clean the   house   ',

})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) => {
    console.log(error);
})