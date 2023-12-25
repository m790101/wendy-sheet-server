const mongoose = require("mongoose");
const { Schema } = mongoose;




const typeSchema = new Schema({
    name: { type: String, max: 50 },
    
  });





  module.exports = mongoose.model("Type", typeSchema);