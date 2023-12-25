const db = require("../config/mongoose")
const Type = require('./type')
const typeData = require('../typeData.json')


db.once('open', () => {

  return typeData.forEach((item) => {
    Type.create({
      name: item.name,
    })
  })

})