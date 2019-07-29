<template>
  <div>
    <h4>测试</h4>
    <div>
      {{didi}}
      {{family}}
    </div>
    <div>
      {{didiFamily}}
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      didi: 'didi',
      family: 'family'
    }
  },
  computed: {
    didiFamily: {
      // getter
      get: function () {
        return this.didi + ' ' + this.family
      },
      // setter 当赋值给计算属性的时候，将调用setter函数。
      // 多用于在模板组件中需要修改计算属性自身的值的时候。
      set: function (newValue) { // newValue就是didiFamily的最新属性值
        // 这里由于该计算属性被赋值，将被调用
        console.log('newVaule = ' + newValue)
        this.didi = 123
        this.family = 456
      }
    }
  },
  mounted () {
    // 赋值，调用setter函数
    this.didiFamily = 'John Doe'
  }
}
</script>
