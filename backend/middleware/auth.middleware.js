import jwt from 'jsonwebtoken'



const checkUser = async (req, res, next) => {
    try {

        let { token } = req.cookies

        if (!token) return res.status(400).json({
            message: "User Doesn't Have A Token "
        })

        const verifyToken = await jwt.verify(token, process.env.JWT_SECRET)

        if (!verifyToken) return res.status(400).json({
            message: "User Token Not Found"
        })

        req.userId = verifyToken.userId
        next()

    } catch (error) {
        return res.status(500).json({
            message:`${error}`
        })
    }

}

export default checkUser