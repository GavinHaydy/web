<template>
  <div
    id="Base"
    :style="{
      background: type === 1 ? '#f4f4f5' : '#333',
      color: type === 1 ? '#000' : '#e6a23c'
    }"
  >
    <el-container>
      <el-header>
        <div>
          <span class="left">
            BUGPZ
          </span>
          <div>
            <a class="a left m_l" href="/">
              主页
            </a>
            <a class="a left m_l" href="/nav">
              站外导航
            </a>
          </div>
          <div>
            <el-button
              :icon="type === 1 ? 'el-icon-turn-off' : 'el-icon-open'"
              id="bg_cl"
              class="right col_btn"
              title="0"
              @click="handleChange(type)"
              circle
            >
            </el-button>
            <span class="right">{{ type === 1 ? '浅色' : '深色' }}模式</span>
            <a href="/register/" class="right a login">
              注册
            </a>
            <a href="/login/" class="right a login">
              登录
            </a>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <a
            href="https://www.aliyun.com/minisite/goods?userCode=qet4zxjy"
            style="color: crimson"
            target="_blank"
          >
            阿里云产品长期活动
          </a>
        </el-aside>
        <el-main
          >main
           <router-view v-if="$route.meta.home"></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-backtop :bottom="60"></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'Base',
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

<style scoped>
#Base {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*height: 100vh;*/
}
.col_btn{
  margin-top: 10px;
  height: 40px;
}

.m_l{
  margin-left: 10px;
}

.a {
  color: #42b983;
}
.login {
  margin-right: 10px;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.el-header {
  position: fixed;
  top: 0;
  width: 100%;
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
  /*color: #333;*/
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  /*background-color: #e9eef3;*/
  /*color: #333;*/
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
