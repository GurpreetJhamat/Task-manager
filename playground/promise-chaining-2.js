require('../src/db/mongoose')
// const User = require('./models/user')
const Task = require('../src/models/task');

Task.findByIdAndDelete('5edd82016f465831c044b3a5').then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})