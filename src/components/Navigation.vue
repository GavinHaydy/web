<!--
 * @Description: 
 * @Author: zhu
 * @Date: 2021-01-04 16:55:34
 * @LastEditTime: 2021-01-04 16:56:18
 * @LastEditors: zhu
-->
<template>
  <div>
    <div v-for="i in body" :key="i">
      <a :href="i" :key="i" target="_blank">
        <img :src="`../assets/UI/icon/${i}.png`" :key="i" />
        <span>
          {{ i }}
        </span>
      </a>
    </div>
  </div>
  <!--  <div-->
  <!--    style="width: 25%; float: left;"><a href=' + {{this.body[i]}} + '  target="_blank">\n' +-->
  <!--    '        <img style="width: 32px; height: 32px;" src="../assets/UI/icon/'+{{this.body[i]}}+'.png\  ">-->
  <!--      <span data-v-ed292c2c="">{{ this.body[i] }}-->
  <!--      </span>-->
  <!--    </a>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      body: {
        'https://github.com/': 'github',
        'https://www.v2ex.com/': 'V2EX',
        'https://www.aliyun.com/': 'aliyun',
        'https://cloud.tencent.com/': 'cloudqq',
        'https://cloud.baidu.com/': 'baiduyun',
        'https://sso.qiniu.com/': 'qiniu',
        'https://v.qq.com/': 'vqq',
        'https://www.iqiyi.com/': 'iqiyi',
        'https://www.youku.com/': 'youku',
        'https://www.douyu.com/': 'douyu',
        'https://www.huya.com/': 'huya',
        'https://www.bilibili.com/': 'bilibili',
        'https://www.jianshu.com/"': 'jianshu',
        'https://www.oschina.net/': 'oschina',
        'http://www.myzaker.com/': 'zaker',
        'https://www.jd.com/': 'jd',
        'http://ifkdy.com/': 'ifkdy',
        'https://www.dytt8.net/': 'dytt8',
        'https://imgurl.org/': 'imgurl',
        'https://www.processon.com/': 'processon',
        'http://www.xiachufang.com/': 'xiachufang'
      }
    }
  }
}
</script>

<style scoped></style>
