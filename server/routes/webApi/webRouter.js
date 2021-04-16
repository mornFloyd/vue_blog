const express = require('express');
//导入登录token编码和解码
const jwt = require('jsonwebtoken')
//获得一个router函数
const router = express.Router({
  mergeParams: true
})
//登录需要的模型
const adminUser = require('../../mongoose/model/AdminUser')
//获取数据需要
const category = require('../../mongoose/model/Category')
//创建分类名接口
// router.post('/',(req,res) => {
//   //将接收到的数据插入数据库
//   if(req.Model.modelName === 'article') {
//     let message = '一定有什么东西没填吧！'
//     if(!req.body.categoryID) res.send(message)
//     if(!req.body.title) res.send(message)
//     if(!req.body.articleContent) res.send(message)
//     if(!req.body.addTime) res.send(message)
//   }
//   req.Model.insertMany(req.body).then(() => {
//     res.send({err:0,msg:'添加成功'})
//   })
// })

//更改分类名
// router.post('/:id',async(req,res) => {
//   //根据提供的id获取数据并且修改掉
//   const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
//   res.send(model)
// })

//查询要更改的分类名数据
router.get('/:id',async(req,res) => {
  //id存在req.params.id里面
  const model = await req.Model.findById(req.params.id)
  //将数据发送回客户端
  res.send(model)
})

//查询分类名数据
router.get('/',async(req,res) => {
  let queryOptions = {}
  if(req.Model.modelName === 'article') {
    queryOptions.populate = 'categoryID'
  }
  //查询数据限制十条分类
  const items = await req.Model.find().setOptions(queryOptions).limit(20)
  res.send(items.reverse())
})

//删除分类名
router.delete('/:id',async(req,res) => {
  //id存在req.params.id里面
  await req.Model.findByIdAndDelete(req.params.id)
  //将数据发送回客户端
  res.send({success: true})
})


module.exports = router