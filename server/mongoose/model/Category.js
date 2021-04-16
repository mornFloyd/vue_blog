const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  categoryName: { 
    type: String, 
    required: true
  },
});

var Category = mongoose.model('category',categorySchema)
//对外抛出一个数据模型
module.exports = Category
