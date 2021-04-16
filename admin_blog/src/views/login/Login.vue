<template>
  <div class="login-box">
    <el-card class="box-card">
      <template #header>
      <div class="card-header">
        <span>mornfloyd_blog_System</span>
      </div>
    </template>
      <el-form>
        <el-form-item>
          <el-input prefix-icon="el-icon-user" v-model="userName" autocomplete="off" placeholder="Enter your userName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-key" show-password type="password" v-model="passWord" autocomplete="off" placeholder="Enter your passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="loginUp">login in</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import axios from 'axios'
import http from 'network/http'
export default {
  data() {
    return {
      userName: '',
      passWord: '', 
    }
  },
  methods: {
    loginUp() {
      this.loading = true
      const user = {
        userName: this.userName,
        passWord: this.passWord
      }
      //发起登录请求
      http.post('/login',user).then(res => {
        sessionStorage.token = res.data
        this.$router.push('/')
        this.$message({
          type: 'success',
          message: '登录成功'
        })
      })
    }
  }
}
</script>
<style scoped>
.login-box {
  height:100vh;
  background-color: #e6e6e6;
}
.box-card {
  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 5px;
}
.card-header {
  text-align: center;
  color: #ccc;
  font-size: 14px;
}
.login-btn {
  width: 100%;
}
</style>