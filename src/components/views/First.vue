<template>
  <div class="first-app">
    {{msg}}
    <confirm text="注册" @message="getMessage"></confirm><!-- 这里就是引用的子组件  Confirm -->
    <p><router-link to="/second">去第二个页面</router-link></p>

    <button v-on:click="count++">You clicked me {{ count }} times.</button>

  </div>
</template>

<script>
// 引入子组件
import Confirm from '../sub/Confirm'
import CuttonCounter from '../sub/CuttonCounter'

// 向外暴露成员
export default {
  name: 'First',
  // 组件的引用
  components: {
    Confirm,
    CuttonCounter
  },
  data () {
    return {
      msg: 'Welcome to FirstApp',
      count: 0
    }
  },
  methods: {
    getMessage (val) {
      alert(val)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .first-app{
    font-size: 30px;
  .link{
  a{
    color: red;
    }
  }
}
</style>
