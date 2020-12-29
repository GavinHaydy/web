<template>
  <el-container>
    <el-header>
      <div>
        <div>
          <a href="#" type="Warning">BUGPZ</a>
        </div>
      </div>
    </el-header>
    <el-aside></el-aside>
    <el-main></el-main>
    <el-footer class="footer">
      <p class="container">
        <a href="mailto:bugpz2779@gamil.com">
          点击联系我们
        </a>
        <a href="/" target="_blank"> Powered by BUGPZ</a>
        <span> &nbsp;&nbsp;© 2019 bugpz.xyz 版权所有 </span>
        <a href="http://beian.miit.gov.cn" target="_blank">蜀ICP备20003462号</a>
      </p>
      <div style="width:300px;margin:0 auto; height: 20px">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011402000281" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="../assets/UI/img/BATB.png" style="float:left;"/>
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
            川公网安备 51011402000281号
          </p>
        </a>
      </div>
    </el-footer>
  </el-container>
</template>

<!-- 引入组件库 -->
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script src="//unpkg.com/element-ui@2.14.1/lib/index.js"></script>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.footer {
  background-color: #5bc0de;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.re_top {
  background-color: #eea236;
  width: 60px;
  height: 50px;
  border-radius: 25px;
  position: fixed;
  right: 0;
  bottom: 8%;
  background-size: 50px;
  background-image: url('../assets/UI/img/re_top.png');
}

.bgp {
  background-color: #F0F8FF;
  /*background: url("../img/bgt.jpg") repeat center 200% fixed;*/
  /*background-color 背景颜色*/
  /*background-image   背景图片地址*/
  /*background-repeat  是否平铺 默认是平铺*/
  /*background-position 背景位置  (模式是左上角 0 0) 方位没有顺序*/
  /*    1.（length 长度 ）写精确单位 或者百分比 第一个值是x坐标 第二个一定是y*/
  /*    2.（position： top|center | bottom | left | right  方位坐标）*/
  /*      如果方位名词只写一个  另外一个默认为center*/
  /*    3.混搭也ok*/
  /*background-attachment 设置背景图是否固定 默认是scroll, fixed是固定*/

  /*合写： background： 背景颜色 背景图片地址 背景平铺 背景滚动 背景位置*/
  /*background: #000 url(image/sst.jpg) no-repeat center -25px fixed;}*/
}

.article {
  height: 300px;
  width: 20%;
  margin-left: 20%;
  overflow: auto;
  background-color: #f5ffcf;
}
.index_div1{
  float: left;
  margin-left: 10%;
  width: 60%;
}
.index_div2{
  float: left;
  padding-left: 15px;
  width: 25%;
  height: 200px;
  background-color: #ffc9e9;
}
.my_space_Navigation{
  width: 33%;
  text-align: center;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

</style>
