<template>
  <div class="mian-box">
    <el-row type="flex" justify='center' class="mian">
      <el-col class="comm-left" :xs='24' :sm='24' :md='14' :lg='13' :xl='12'>
        <el-empty v-show='!textData' description="no data"></el-empty>
        <h2 class="diary-news">最新日志</h2>
        <el-divider></el-divider>
        <div class="diary-list" v-for="(item,index) in textData" :key="index">
          <span class="list-title">{{item.title}}</span>
          <div class="list-icon">
            <span><i class="el-icon-date"></i>{{item.time}}</span>
            <span><i class="el-icon-folder">学习记录</i></span>
            <span><i class="el-icon-view">{{item.viewCount}}人偷偷的看过了</i></span>
          </div>
          <span class="list-content">{{item.introduce}}</span>
          <read :id='item._id' />
          <el-divider></el-divider>
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
//查看原文小组件
import Read from 'components/common/mian/Read'
import {request} from 'network/request'
//获取时间戳转换函数
import {getDate} from 'common/util'
export default {
  data() {
    return {
     textData: []
    }
  },
  components: {
    Author,
    Adverts,
    Read
  },
  created() {
    request('/articles').then(res => {
      this.textData = res.data
      //this.textData.time = getDate(this.textData.addTime)
      for(let item in this.textData) {
        this.textData[item].time = getDate(this.textData[item].addTime)
      }
    })
  }
}
</script>
<style scoped>
.mian {
  margin-top: 8px;
}
.diary-news {
  color: #999;
  font-size: 18px;
  font-weight: 600;
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
.list-title {
  color: #1e90ff;
  font-size: 22px;
}
.list-icon {
  margin: 12px 0px;
}
.list-icon span {
  display: inline-block;
  margin-right: 8px;
  color: #ccc;
  font-size: 14px;
}
.list-content {
  color: #999;
}
.el-divider--horizontal {
  margin: 15px 0;
}
</style>