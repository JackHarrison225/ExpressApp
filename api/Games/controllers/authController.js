const Users = require("../models/userModels")
const createError = require("http-errors")
const bcrypt = require("bcrypt")
const {v4: uuidv4} = require("uuid")




exports.register = async function(req, res, next) {
    try {
        const {username, password} = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new Users({username, password: hashedPassword})

        newUser.token = uuidv4()
        await newUser.save()
        

        res.status(201).json({  token: newUser.token, message: 'Registration Successful'})
    } catch (error) {
        next(error)
    }
}

exports.login = async function (req, res, next) {
    try {
        const {username, password} = req.body // similar to writing username: req.body.username and password: req.body.password

        const user = await Users.findOne({ username }) //findOne is a MongoDB method, returns query that satisfies the query criteria
        console.log(user)
         if(!user) {

            //  const newUser = new Users({username: username, password: password})

            // await newUser.save()
          
             console.error('The username was not found')
            //  res.send({token: newUser.token})
             throw createError(404, 'User not found.')
         }

        // const isMatch = await bcrypt.compare(password, user.password)
        // if(!isMatch) {
        //     throw createError(401, 'Invalid Credentials.')
        // }
        // console.log(isMatch)
        
        user.token = uuidv4();
        await user.save()
        // res.send({token: user.token})
        res.json({ token: user.token, message : 'Login Successful'})


    } catch (error){
        next(error)
    }
}

