import userModel from '../models/user.model.js'
import validater from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import generateToken from '../utils/generate.token.js'


const signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body

        const existUser = await userModel.findOne({email})

        if (existUser) return res.status(400).json({
            message: "User Already Exist"
        })

        if (!validater.isEmail(email)) return res.status(400).json({
            message: "Enter A Valid Email"
        })

        if (password.length < 8) return res.status(400).json({
            message: "Password Too Weak"
        })

        let hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
            role: role
        })

        const token = await generateToken(user._id)
        res.cookie("token",token)
        // req.cookie("token", token)
        return res.status(201).json({
            message: "User-Created",
            user: {
                userId: user._id,
                userName: user.name,
                userEmail: user.email,
                userRole: user.role
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: `Some Error Occured ${error}`
        })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) return res.status(404).json({
            message: "User Not Found"
        })

        let isCorrectPassword = await bcrypt.compare(password, user.password)

        if (!isCorrectPassword) return res.status(400).json({
            message: "User-Entered-Wrong-Password"
        })

        let token = await generateToken(user._id);

        // req.cookie("token", token)
        res.cookie("token",token)
        return res.status(200).json({
            message: "User Logged In",
            User: {
                userId: user._id,
                userName: user.name,
                userEmail: user.email,
                userRole: user.role
            }
        })

    } catch (error) {
        return res.status(500).json({
            message: `${error}`
        })
    }
}

const logOut = (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({
            message: "User LoggedOut",
        })

    } catch (error) {
        return res.status(500).json({
            message:`${error}`
        })
    }
}


export default {
    signUp,
    login,
    logOut
}