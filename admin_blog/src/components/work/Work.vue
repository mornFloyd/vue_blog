<template>
  <div class="work">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">后台管理系统</el-breadcrumb-item>
      <el-breadcrumb-item>工作台</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="5">
      <!-- 左侧布局 -->
      <el-col :span="18">
        <!-- 顶部的选择框 -->
        <el-row :gutter="10" class="margin-input">
          <!-- 左侧输入框 -->
          <el-col :span="21">
            <el-input v-model="blogTitle" placeholder="博客标题"></el-input>
          </el-col>
          <!-- 右侧选择框 -->
          <el-col :span="3">
            <el-select v-model="blogCategoryId" placeholder="请选择">
              <el-option
                v-for="item in categoryNames"
                :key="item._id"
                :label="item.categoryName"
                :value="item._id">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter='10' class="markdowm-box">
          <!-- 左右文本域 -->
          <el-col :span="12">
            <el-input
              v-model="blogContent"
              class="markdown"
              type="textarea"
              :rows="30"
              placeholder="请输入内容">
            </el-input>
          </el-col>
          <el-col :span="12" >
            <v-md-preview :text="blogContent" class="show-html show"></v-md-preview>
          </el-col>
        </el-row>
      </el-col>
      <!-- 右侧布局 -->
      <el-col :span="6" class="col-right">
        <el-row>
          <el-col :span="22" class="margin-input">
            <el-date-picker
              v-model="blogdate"
              type="date"
              placeholder="发布日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-input
              v-model="blogIntroduce"
              class="markdown"
              type="textarea"
              :rows="8"
              placeholder="文章简介">
            </el-input>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24">
            <v-md-preview :text="blogIntroduce" class="show-html"></v-md-preview>
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col :span="24">
            <el-button type="primary" class="create">发布文章</el-button>
          </el-col>
        </el-row> -->
        <el-button type="primary" class="create" @click="pushText" >发布文章</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { ElMessage } from 'element-plus'
import http from 'network/http'
export default {
  data() {
    return {
      //文章分类的id
      blogCategoryId: '',
      blogTitle: '', 
      blogContent: '', 
      //文章发布时间戳
      blogdate: '',

      //文章简介
      blogIntroduce: '',
      categoryNames: []
    }
  },
  methods: {
    pushText() {
      //提交之前将字符串日期转换为时间戳
      let date = new Date(this.blogdate)
      let time = date.getTime()/1000
      http.post('/rest/articles',{
        'categoryID': this.blogCategoryId,
        'title': this.blogTitle,
        'introduce': this.blogIntroduce,
        'articleContent': this.blogContent,
        'addTime': time,
        'viewCount': 80
      }).then(res => {
        if(res.data.msg === '添加成功') {
            this.$message({
              type: 'success',
              message: '添加成功!'
            });
          this.$router.push('/articleList')
        } else {
          ElMessage.error('一定有什么东西没填吧！好好查看下！');
        }
      })
    }
  },
  created() {
    //获取分类名数据
    http.get('/rest/categories').then(res => {
      this.categoryNames = res.data.reverse()
    })
  }
}
</script>
<style scoped>
.work {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
}
.bread {
  margin-top: 15px;
  padding: 20px;
  background-color: rgb(238, 241, 246);
  border-radius: 5px;
}
.margin-input {
  margin-top: 20px;
  margin-bottom: 15px;
}
.show-html {
  background-color: rgb(238, 241, 246);
  height: 100%;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}
.col-right {
  position: relative;
  text-align: center;
}
.col-right .create {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.show {
  overflow: hidden;
}
</style>