<template>
  <div class="author-div clear-fix">
    <div class="avatar"><el-avatar :size='100' src='https://th.bing.com/th/id/R0b3989bd20094c532d7dc36259349d7c?rik=unr4GKYf8%2f3vEQ&riu=http%3a%2f%2fp1.music.126.net%2f3SYIXJ3qplnhW6vKv6a7bw%3d%3d%2f2537672838060410.jpg&ehk=u%2ft9e1Coaw985RJYDVbSIoouG63scdo1kcoCO48Yns4%3d&risl=&pid=ImgRaw'></el-avatar></div>
    <p>mornfloyd</p>
    <p class="self-introduce" v-html="pInnerHTML"></p>
    <div class="tag-group">
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain">
        {{ item.label }}
      </el-tag>
    </div>
    <el-divider>社交账号</el-divider>
    <div class='aouthor-introduction'>
      <div class='author-icon'>
        <a href="https://github.com/mornFloyd"><el-avatar class="element-icon icon-github" :size='30' ></el-avatar></a>
        <el-avatar class="element-icon icon-weixin" :size='30' @mouseleave="none" @mouseover="show"><span v-show="isShow" class="icon-text"><i></i>wechat:lkqq_911</span></el-avatar>
        <el-avatar class="element-icon icon-QQ" :size='30' @mouseleave="none2" @mouseover="show2"><span v-show="isShow2" class="icon-text"><i></i>QQ:1102304402</span></el-avatar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { type: '', label: '前端小学僧' },
        { type: 'success', label: '秀发健在' },
        { type: 'info', label: '摇滚乐爱好者' },
        { type: 'danger', label: '生产队的驴' },
        { type: 'warning', label: '路子野' }
      ],
      isShow: false,
      isShow2: false,
      pInnerHTML: ''
    }
  },
  methods: {
    show() {
      this.isShow = true;
    },
    none() {
      this.isShow = false;
    },
    show2() {
      this.isShow2 = true;
    },
    none2() {
      this.isShow2 = false;
    },
    begin() {
      let innerHtml = '你知道么在地球上是永远见不到月球背面的，就像你觉得我风度翩翩，但绝对不知道我还会敲代码。'
      innerHtml = innerHtml.split('')
      let that = this
      for(let i=0;i<innerHtml.length;i++) {
        (function(a) {
          setTimeout(() => {
            that.pInnerHTML += innerHtml[a]
          },a*200)
        })(i)
      }
    }
  },
  created() {
    //这是一个个人简介字符串切割的函数  为达到逐字显示的效果
    this.begin()
  }
}
</script>
<style scoped>
.author-div {
  text-align:center;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
}
.author-div p {
  color: #1e90ff;
  font-size: 17px;
  font-weight: 500;
}
.avatar {
  margin: 20px 0px;
}
.author-icon .element-icon{
  margin-right: 15px;
}
.element-icon {
  position: relative;
  overflow: visible;
}
.icon-text {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  background-color: rgba(0,0,0,.65);
  font-size: 12px;
  padding: 0 3px;
  border-radius: 5px;
}
.icon-text i{
  position: absolute;
  border-top: 7px solid rgba(0,0,0,.65);
  border-left: 5px solid transparent ;
  border-right: 5px solid transparent;
  border-bottom: 7px solid transparent;
  left: 50%;
  bottom: -13px;
  transform: translateX(-50%);
}
.tag-group {
  padding: 5px;
}
.tag-group .el-tag{
  margin-left: 10px;
  height: 22px;
  line-height: 22px;
  margin-top: 8px;
}
.aouthor-introduction {
  margin-bottom: 15px;
}
/* 个人简介部分！ */
.author-div .self-introduce {
  padding: 15px;
  font-size: 13px;
  color: #999;
}
</style>