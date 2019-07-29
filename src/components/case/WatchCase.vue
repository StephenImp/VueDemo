<template>
  <form>
    <input v-model="obj.a" type="text" />
  </form>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      obj: {
        a: 'hello world'
      }
    }
  },
  watch: {
    'obj.a': {
      handler: function (val, oldVal) { /* ... */ },
      // immediate这个属性需要加上，代表该回调将会在侦听开始之后被立即调用
      immediate: true
    }
  }
}
</script>
