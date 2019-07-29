<template>
  <div class="second-app">{{msg}}</div>
</template>

<script>
// 向外暴露成员
export default {
  name: 'Second',
  data () {
    return {
      msg: 'Welcome to Second-App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--样式只在当前组件中生效-->
<style lang="less" scoped>
.second-app{
  font-size: 30px;
  .link{
    a{
      color: red;
    }
  }
}
</style>
