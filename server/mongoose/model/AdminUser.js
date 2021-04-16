const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminUserSchema = new Schema({
  userName: { 
    type: String, 
    required: true
  },
  passWord: { 
    type: String, 
    required: true
  },
});

var AdminUser = mongoose.model('adminUser',adminUserSchema)
//对外抛出一个数据模型
module.exports = AdminUser