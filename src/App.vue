<template>
  <div id="app" :style="{ background: type === 1 ? '#f4f4f5' : '#333330' }">
    <el-container>
      <el-header>
        <div>
          <span class="left">
            BUGPZ
          </span>
          <div>
            <a class="a left" href="/">
              主页
            </a>
          </div>
          <div>
            <el-button
              :icon="type === 1 ? 'el-icon-turn-off' : 'el-icon-open'"
              id="bg_cl"
              class="right"
              title="0"
              @click="handleChange(type)"
            >
            </el-button>
            <span class="right"
              >{{ type === 1 ? '浅色' : '深色' }}模式</span
            >
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside>aside</el-aside>
        <el-main
          >main
          <router-view />
        </el-main>
      </el-container>
      <el-container>
        <el-footer>
          <div class="container">
            <a href="mailto:bugpz2779@gamil.com" class="a" target="_blank">
              点击联系我们
            </a>
            <a href="/" target="_blank" class="a"> Powered by BUGPZ</a>
            <span> &nbsp;&nbsp;© 2019 bugpz.xyz 版权所有 </span>
            <a href="http://beian.miit.gov.cn" target="_blank" class="a"
              >蜀ICP备20003462号</a
            >
          </div>
          <div style="width:300px;margin:0 auto; height: 20px">
            <a
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011402000281"
              style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
              class="a"
            >
              <!-- <img src="./assets/UI/img/BATB.png" style="float:left;"/> -->
              <p
                style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393; color: #42b983"
              >
                川公网安备 51011402000281号
              </p>
            </a>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      type: 1 // 1-深色，2-浅色
    }
  },
  methods: {
    handleChange (type) {
      if (type === 1) {
        this.type = 2
      } else {
        this.type = 1
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 94vh;
}

.a {
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
  /* background-image: url('./assets/UI/img/re_top.png'); */
}

.bgp {
  background-color: #f0f8ff;
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

.index_div1 {
  float: left;
  margin-left: 10%;
  width: 60%;
}

.index_div2 {
  float: left;
  padding-left: 15px;
  width: 25%;
  height: 200px;
  background-color: #ffc9e9;
}

.my_space_Navigation {
  width: 33%;
  text-align: center;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 6vh;
  /*line-height: 60px;*/
}

.el-aside {
  /*background-color: #d3dce6;*/
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  /*background-color: #e9eef3;*/
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.left {
  float: left;
}

.right {
  float: right;
}
</style>
