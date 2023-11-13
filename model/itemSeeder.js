const db = require("../config/mongoose")
const Item = require('./item')
const data = require('../data.json')


// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }


db.once('open', () => {

  return data.forEach((item) => {
    Item.create({
      name: item.name,
      in_stock: item.in_stock,
    })
  })
  
  
  // .then(() => {
  //   console.log("done")
  //   process.exit()
  // })
})