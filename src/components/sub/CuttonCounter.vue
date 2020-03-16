<template>
  <div id="components-demo">
    <button-counter></button-counter>
  </div>
</template>

<script>
  export default {
    name: 'components-demo',
    data () {
      return {
        msg: '向父组件传的值'
      }
    },
    methods: {
    }
  }
</script>
