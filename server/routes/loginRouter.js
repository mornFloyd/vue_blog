const express = require('express');
const router = express.Router()
const adminUser = require('../mongoose/model/AdminUser')
router.post('/',async(req,res) => {
  const {userName, passWord} = req.body
  //根据用户名查找对应的用户
  const user = await adminUser.findOne({userName})
  //校验这个用户名是否存在
  if(!user) return res.status(422).send({message: '用户不存在'})
  //校验密码
  if(user.passWord !== passWord) return res.status(422).send({message: '密码错误'})
  //生成token
  const jwt = require('jsonwebtoken')
  //签名保存id名字
  const token = jwt.sign({id: user._id},'das4dfghk4x8rgd2sfasbhd')
  res.send(token)
})

module.exports = router
