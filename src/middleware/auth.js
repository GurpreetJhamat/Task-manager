const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisismyjwttoken');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if(!user){
            throw new Error()
            // console.log('error')
        }    

        req.token = token;
        req.user = user;
        next();
    } catch(e) {
        res.status(401).send({ error: 'Please Authenticate' })
    }
}

function name(){
    
}
module.exports = auth