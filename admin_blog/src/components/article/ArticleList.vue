<template>
  <div>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220">
      </el-table-column>
      <el-table-column prop="categoryID.categoryName" label="分类名称" >
      </el-table-column>
      <el-table-column prop="title" label="文章标题" >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template #default="scope" width="200">
          <!-- 这个scope表示表单中当前这一行的数据 -->
          <el-button type="danger" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> 
  </div>
</template>
<script>
import http from 'network/http'
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.fatch()
  },
  methods: {
    fatch() {
      http('/rest/articles').then(res => {
        this.items = res.data
      })
    },
    remove(row) {
      this.$confirm(`是否确认删除该文章 "${row.title}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //发起删除请求
        http.delete(`/rest/articles/${row._id}`).then(() => {
          //等到删除请求发送后并且服务端返回接收的时候提示删除成功
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          //重新获取数据
          this.fatch()
        })
      })
      
    }
  }
}
</script>
<style scoped>
</style>