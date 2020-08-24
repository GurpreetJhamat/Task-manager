const express = require('express');
require('./db/mongoose')

const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});









































// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const password = 'red12345!';
//     const hashedPassword = await bcrypt.hash(password, 8);

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword);
//     console.log(isMatch)
// }

// const myFunction = async () => {
    
// }

// myFunction()