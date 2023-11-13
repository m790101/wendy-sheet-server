const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.json())
const mongoose = require('mongoose');
const Item = require('./model/item')
require('dotenv').config();

// body header設置
const {
    genResponse
  } = require('./utils/responseHelper')
  const {
    successCode,
    getMessageByCode,
  } = require('./config/index')


//mongodb 連線
const mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB, { useNewUrlParser: true })
const db = mongoose.connection



// CORS All Request
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-XSRF-TOKEN, True-Client-IP')
    next()
  }


app.use(allowCrossDomain)


app.get("/", async(req, res) => {
      res.send('yoooo')

})

app.get("/allItem", async(req, res) => {

  let data = await Item.find()
  const resJsonData = genResponse(successCode, getMessageByCode(successCode), data)
      res.json(resJsonData)
})


app.post('/update', async (req, res) => { 
  const id = req.body.data._id
  const number = req.body.data.in_stock
  console.log('id',id)
  console.log(req.body,'body')
    try { 
      let data = await Item.findById(id)
      console.log(data, 'data')
      data.in_stock = number
      await data.save()
      const resJsonData = genResponse(successCode, getMessageByCode(successCode), {})
      res.json(resJsonData)

    } catch (e) { 
        res.status(404).send(e)
    }
})


app.post('/delete', async (req, res) => { 
  const id = req.body.id
  console.log('body',req.body)
    try { 
      let data = await Item.findById(id)
      console.log(data, 'data')
      await data.deleteOne()
      const resJsonData = genResponse(successCode, getMessageByCode(successCode), {})
      res.json(resJsonData)

    } catch (e) { 
        res.status(404).send(e)
    }
})


app.post('/add', async (req, res) => { 
  const data = req.body.data
  console.log('data',data)
    try { 
      Item.create({
        name: data.itemName,
        in_stock: data.itemNumber,
      })
      const resJsonData = genResponse(successCode, getMessageByCode(successCode), {})
      res.json(resJsonData)

    } catch (e) { 
        res.status(404).send(e)
    }
})


app.listen(1337, (req, res) => console.log("app is running on http://localhost:1337/"));
db.on('error', console.error.bind(console, 'MongoDB connection error:')) // 連線失敗
db.once('open', (db) => console.log('Connected to MongoDB')); // 連線成功