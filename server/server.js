const express = require('express');
//连接数据库
const db = require('./mongoose/connect');
const app = express();
app.use(require('cors')())
//req-body的解析
const bodyParser = require('body-parser')
//加载post需要用的中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//引入路由
const categoryRouter = require('./routes/categoryRouter')
//给路由使用中间件加载
app.use('/admin/api/rest/:resource',async(req,res,next)=> {
  //这个路由请求过来的类名是小写复数的与文件名不符合  所以需要下载插件转换一下  没转化是categories
  const modelName = require('inflection').classify(req.params.resource)
  //将模型挂载到req对象里面
  req.Model = require(`./mongoose/model/${modelName}`)
  next()
},categoryRouter)
//登录接口路由
const loginRouter = require('./routes/loginRouter')
app.use('/admin/api/login',loginRouter)

//引入前台路由
const webRouter = require('./routes/webApi/webRouter')
app.use('/web/api/rest/:resource',async(req,res,next)=> {
  //这个路由请求过来的类名是小写复数的与文件名不符合  所以需要下载插件转换一下  没转化是categories
  const modelName = require('inflection').classify(req.params.resource)
  //将模型挂载到req对象里面
  req.Model = require(`./mongoose/model/${modelName}`)
  next()
},webRouter)


app.listen(3000,() => {
  console.log('http://localhost:3000');
})