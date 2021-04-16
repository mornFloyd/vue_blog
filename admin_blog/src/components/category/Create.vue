<template>
  <div>
    <h2>{{id?'编辑':'新建'}}分类</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="category.parent" placeholder="请选择">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.categoryName"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="category.categoryName" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import http from 'network/http'
export default {
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      category: {},
      parents: []
    }
  },
  methods: {
    save() {
      if (!this.id) {
        http.post('/rest/categories',this.category).then(res => {
          this.$router.push('/category/list')
          this.$message.success("新分类添加成功");
        })
      }else {
        http.post(`/rest/categories/${this.id}`,this.category).then(res => {
          this.$router.push('/category/list')
          this.$message.success("分类名修改成功");
        })
      }
      // request.post('categories',this.category).then(res => {
      //   this.$router.push('/category/list')
      //   this.$message = ({
      //     type: 'success',
      //     message: '保存成功'
      //   })
      // })
    },
    fetch() {
      //使用反引号语法就可以在字符串中填写变量了
      http.get(`/rest/categories/${this.id}`).then(res => {
        this.category = res.data
      })
    },
    parentsOptions() {
      http.get(`/rest/categories`).then(res => {
        this.parents = res.data
      })
    }
  },
  created() {
    this.parentsOptions()
    this.id && this.fetch()
  }
}
</script>
<style scoped>
</style>