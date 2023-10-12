const User = require('../models/User')
const {hashPassword, comparePassword}  =  require('../helpers/auth')

const jwt = require('jsonwebtoken')

const test = (req,res) =>{
    res.json('test is working')
}

const registerUser = async (req,res) =>{
    try{
        const {name,email,password} = req.body;
        // check is name was entered
        if(!name){
            return res.json({
                error: 'name is required'
            })
        };

        if(!password || password.length < 6){
            return res.json({
                error:'password must be more than 6 charaters'
            })
        };
        const exist = await User.findOne({email})

        if(exist){
            return res.json({
                error:"Email is takrn already"
            })
        }

        const hashedPassword = await hashPassword(password)

        const user =  await User.create({
            name, email, password: hashedPassword
        })

        return res.json(user)

    }
    catch(err){
        console.log(err)
    }
};

const loginUser = async (req,res) =>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error : "No user Found",
            })            
        }
        const match = await comparePassword(password, user.password)
        if(match){
            jwt.sign({email:user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err,token) =>{
                if(err){
                    throw err
                }
                else{
                    res.cookie('token', token, {
                        // expires: new Date(Date.now() + 25892000000),
                        // httpOnly:true
                    }).json(user)
                }
                
            })
            res.json('passwords match')
        }
        if(!match){
            res.json({
                error: "password do not match"
            })
        }
    } catch (error) {
        console.log(error)
    }
};

const getProfile = (req,res) =>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err,user) =>{
            if(err) throw err;
            res.json(user)
        })
        
    }
    else{
            res.json(null)
    }
}


module.exports = {test, registerUser,loginUser, getProfile}