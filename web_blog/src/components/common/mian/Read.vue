<template>
  <div class="read" @click="getRead">
    <i class="el-icon-document"></i><span>查看全文</span><i class="el-icon-arrow-right"></i>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    getRead() {
      this.$router.push('/detail/'+this.id)
    }
  }
}
</script>
<style scoped>
  .read {
    margin-top: 8px;
    text-align: right;
    margin-right: 10px;
    cursor: pointer;
  }
  .read span {
    color: #1e90ff;
    margin: 0 3px;
  }
  .el-icon-arrow-right {
    color: #1e90ff;
  }
</style>