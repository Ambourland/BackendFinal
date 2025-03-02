const Controller = require("../controller/controller")
const MiddleWare = require("../middleware/middleware")


module.exports = (app) => {

    app.post("/register", Controller.register)

    app.post("/login",  Controller.login)

    app.get("/authCheck", Controller.authCheck)
}