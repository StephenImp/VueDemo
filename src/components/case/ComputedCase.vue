<template>
  <div>
    <h4>测试</h4>
    <div>
      <input type="text" v-model="message" />
      <div>{{changeMessage}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello'
    }
  },
  computed: {
    changeMessage: {
      // 计算属性：依赖message变化而变化  依赖没变化就不会重新渲染；
      get () {
        return this.message + 'world'
      },
      set () {
      }
    }
  }
}
</script>
