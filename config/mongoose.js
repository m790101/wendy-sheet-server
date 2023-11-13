const mongoose = require('mongoose')
require('dotenv').config();
const apikey= process.env.API_KEY;
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)



const db = mongoose.connection
db.once('open',() => {
 console.log('Mongodb connect')
})

db.on("error", () => {
    console.log("mongodb error")
})


module.exports = db