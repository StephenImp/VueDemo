<template>
  <div class="confirm-button">
      <button @click="getButtonClick">{{text||确认}}</button>
  </div>
</template>

<script>
export default {
  name: 'confirm-button',
  // 父组件给子组件的值通过props接收；子组件通过$emit向父组件传值
  props: ['text'], // 父组件传给子组件的值
  data () {
    return {
      msg: true
    }
  },
  methods: {
    getButtonClick () { // 点击的时候向父组件传值
      // 父组件给子组件的值通过props接收；子组件通过$emit向父组件传值
      this.$emit('message', this.msg)// 向父组件传值
    }
  }
}
</script>
