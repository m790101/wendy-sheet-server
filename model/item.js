const mongoose = require("mongoose");
const { Schema } = mongoose;
// const Schema = mongoose.Schema;
// // 先新增 Author 的 Schema ，其中可設定姓名、生卒年等，可對其 value 的規格做限制。
// const itemSchema = new Schema({
//   item_type: { type: String, required: true, max: 100 },
//   name: { type: String, required: true, max: 100 },
//   in_stock: { type: Number, required: true },
//   expire_date: { type: Date },
// });

const itemSchema = new Schema({
    type: { type: String, max: 50 },
    unit: { type: String, max: 10 },
    name: { type: String, required: true, max: 100 },
    in_stock: { type: Number, required: true },
    expire_date: { type: Date },
    remark: { type: String, max: 100 },
    
  });
// AuthorSchema.virtual("lifespan").get(function () {
//   return (
//     this.date_of_death.getYear() - this.date_of_birth.getYear()
//   ).toString();
// });


// 並用 _id 來產生其 URL。
// AuthorSchema.virtual("url").get(function () {
//   return "/catalog/author/" + this._id;
// });
// 最後再輸出 module 以供使用。
module.exports = mongoose.model("Item", itemSchema);
