const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs'); //for password hashing
//importing the models
const User = require("../models/userModels")

// register user
router.post('/register', async (req, res) => {
    try {

        //checking if user already exist
        const userExist = await User.findOne({ 'email': req.body.email })
        if (userExist) {
            return res.status(400).send({ message: 'User already exists', success: false })

        }
        else {
            const password = req.body.password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            req.body.password = hashedPassword;
            const newUser = new User(req.body); //get all values from users input
            await newUser.save(); //save it to the database
            //if status is success show response
            res.status(200).send({ message: "User created successfully", success: true });
            console.log(newUser);
        }

    } catch (error) {
        res.status(500).send({ message: "Error creating the user", success: false, error });
    }
})

//login user
router.post('/login', async (req, res) => {
    try {


    } catch (error) {

    }
})

module.exports = router;