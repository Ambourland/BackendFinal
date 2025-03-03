const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
const Router = require("./routes/route")
const cookieParser = require('cookie-parser');
require('dotenv').config()

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
))
app.use(express.json())
Router(app)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected to Database")
    })
    console.log(`Server is running on port: ${PORT}`);
});
