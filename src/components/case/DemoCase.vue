<template>
  <div>
    <!-- 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
    Mustache 标签将会被替代为对应数据对象上 msg 属性的值。
    无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。-->
    <span>Span-Message: {{ msg }}</span>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <p>{{ foo }}</p><br>
    <button v-on:click="foo = 'baz'">Change it</button><br>
    <input v-model="msg"><br>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to App',
      foo: 'bar',
      a: 666,
      rawHtml: 'rawHtml'
    }
  }
}
</script>
