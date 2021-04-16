const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  //关联查询的类别id
  categoryID: { 
    type: mongoose.SchemaTypes.ObjectId, 
    ref: 'category'
  },
  //标题
  title: {
    type: String,
    required: true
  },
  //简介
  introduce: {
    type: String
  },
  //内容
  articleContent: {
    type: String, 
    required: true
  },
  //时间戳
  addTime: {
    type: Number,
    required: true
  },
  //访问次数
  viewCount: {
    type: Number,
  }
});

var Article = mongoose.model('article',articleSchema)
//对外抛出一个数据模型
module.exports = Article