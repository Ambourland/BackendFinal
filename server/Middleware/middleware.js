const jwt = require('jsonwebtoken')
const Auth = require("../model/model")

const middleware = (req, res, next) => {

    console.log("MiddleWare HITTTTTTTTT")
    console.log("AUTH CHECK", req.headers.cookie)
    if (!req.headers.cookie) {
        console.log("NO COOKIE")
        res.json({ msg: "no cookie" })
    } else {
        console.log("$$$", req.headers.cookie.split("="))
        let split = req.headers.cookie.split("=")
        console.log("SPLIT", split[1])

        const decoded = jwt.verify(split[1], process.env.SECRET_KEY) 
           
            console.log("decoded", decoded)
            req.user = decoded 
            next()
    }
    next()


}

module.exports = middleware