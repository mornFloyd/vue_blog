<template>
  <div class="header">
    <el-row type="flex" justify="center">
      <el-col :xs='24' :sm='24' :md='14' :lg='11' :xl='12'>
        <span class="logo">真的猛士</span>
        <span class='txt'>敢于挑战船新的技术</span>
      </el-col>
      <el-col :xs='0' :sm='0' :md='8' :lg='7' :xl='6' :push="2">
        <el-menu default-active="activeIndex" mode="horizontal">
          <el-menu-item key="home" index='1' @click="toIndex">
            <i class="el-icon-s-shop"></i>
              博客首页
          </el-menu-item>
          <el-menu-item key="text" index="2" @click="toText">
            <i class="el-icon-tickets"></i>
            文章
          </el-menu-item>
          <el-menu-item key="life" index="3" @click="toLife">
            <i class="el-icon-camera"></i>
            生活
          </el-menu-item>
        </el-menu>

      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    toIndex() {
      this.$router.push('/home')
    },
    toText() {
      this.$router.push('/list')
    },
    toLife() {
      this.$router.push('/life')
    }
  }
}
</script>
<style scoped>
.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  height: 60px;
  overflow: hidden;
  padding: 6px;
  position: sticky;
  top: 0;
  z-index: 999;
}
.header .logo {
  color: #1e90ff;
  font-size: 23px;
  line-height: 50px;
  text-align: left;
  margin-right: 5px;
}
.header .txt {
  color: #999;
  font-size: 14px;
  display: inline-block;
  
}
</style>