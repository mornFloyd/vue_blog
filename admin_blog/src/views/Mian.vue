<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router>
        <span class="item-box"></span>
        <el-menu-item index="/work">
          <i class="el-icon-pie-chart"></i>
          <template #title>工作台</template>
        </el-menu-item>
        <el-menu-item index="/articleList">
          <i class="el-icon-document"></i>
          <template #title>文章管理</template>
        </el-menu-item>
        <el-submenu index="/category">
          <template #title><i class="el-icon-user"></i>分类管理</template>
          <el-menu-item-group>
            <template #title>分类</template>
            <el-menu-item index="/category/create">新建分类</el-menu-item>
            <el-menu-item index="/category/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>留言管理</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main class="mian-color">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      
    }
  };
</script>

<style>
  .mian-color {
    background-color: #ccc;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .item-box {
    display: block;
    height:29px;
    line-height: 29px;
    text-align: center;
  }
</style>
