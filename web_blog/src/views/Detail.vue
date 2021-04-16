<template>
  <div class="mian-box">
    <el-row type="flex" justify='center' class="mian">
      <el-col class="comm-left" :xs='24' :sm='24' :md='14' :lg='13' :xl='12'>
        <el-empty v-show='!detailData' description="no data"></el-empty>
        <div class="diary-news">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/list' }">文章</el-breadcrumb-item>
            <el-breadcrumb-item>{{detailData.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div>
          <div class="detail-title">
            {{detailData.title}}
          </div>
          <div>
            <div class="list-icon">
              <span><i class="el-icon-date"></i>{{detailData.time}}</span>
              <span><i class="el-icon-folder"></i>学习记录</span>
              <span><i class="el-icon-view"></i>{{detailData.viewCount}}人已窥视</span>
            </div>
          </div>
          <div class="detail-content">
            <v-md-preview :text="detailData.articleContent"></v-md-preview>
          </div>
        </div>

      </el-col>
      <el-col class="comm-right" :xs='0' :sm='0' :md='8' :lg='5' :xl='6'>
        
        <Author />
        <Adverts />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Author from 'components/common/mian/Author'
import Adverts from 'components/common/mian/Adverts'
//获取时间戳转换函数
import {getDate} from 'common/util'
import {request} from 'network/request'
export default {
  data() {
    return {
      detailData: {}
    }
  },
  components: {
    Author,
    Adverts
  },
  created() {
    const textId = this.$route.params.id
    request(`/articles/${textId}`).then(res => {
      this.detailData = res.data
      this.detailData.time = getDate(this.detailData.addTime)
    })
  }
}
</script>
<style scoped>
.mian {
  margin-top: 8px;
  color: rgba(0, 0, 0,.65);
}
.diary-news .el-breadcrumb{
  font-size: 16px;
  font-weight: 600;
  background-color: #e1f0ff;
  padding: 10px;
}
.comm-left, .comm-right{
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  border-bottom: #e6e6e6;
}
.comm-left {
  margin-right: 10px;
}
.comm-right {
  background-color: #f6f6f6;
  padding: 0;
}
.el-divider--horizontal {
  margin: 15px 0;
}

.detail-title {
  text-align: center;
  padding: 25px;
  font-size: 23px;
  
}
.list-icon {
  margin-bottom: 40px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
}
.list-icon span {
  display: inline-block;
  margin-right: 16px;
}
.list-icon i {
  margin-right: 3px;
}
</style>