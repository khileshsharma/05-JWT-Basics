// // check username, password in post(login) request
// // if exist create new JWT
// // send back to fron-end
// // setup authentication so only the request with JWT can access the dasboard

//✨✨✨header + '.' + payload + '.' + secret ==> jwt structure

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { badRequest } = require('../errors/index');

const login = async (req, res) => {
    const { username, password } = req.body;
    //   // mongoose validation
    //   // Joi
    //   // check in the controller
    console.log(username, password)
    if (!username || !password) {
        throw new badRequest('Please provide email and password');
    }
    // normally we would check if the user is in the database
    // but for this demo, let's just hardcode it
    //   //just for demo, normally provided by DB!!!!
    const id = new Date().getDate();
    //   // try to keep payload small, better experience for user
    //   // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    console.log(token)
    res.status(200).json({ msg: 'User created!', token });
};
const dashboard = async (req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Your lucky number is ${luckyNumber}` });
}

module.exports = {
    login,
    dashboard
}