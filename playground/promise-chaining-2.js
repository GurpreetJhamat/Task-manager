require('../src/db/mongoose')
// const User = require('./models/user')
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5edd82016f465831c044b3a5').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return task;
}

deleteTaskAndCount('5edd82016f465831c044b3a5').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(error, e);
})
