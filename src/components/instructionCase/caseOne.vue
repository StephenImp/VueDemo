<template>
  <div>
    <span v-text="msg"></span><br>
    <!-- 等价-->
    <span>{{msg}}</span>

    <h1 v-show="ok">Hello!</h1>

    <h1 v-if="ok">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <button v-on:click="counter += 1">Add</button>
    <p>The button above has been clicked {{ counter }} times.</p>

    <div >
      <ol>
        <li v-for="todo in items"  v-bind:key="todo">
          {{ todo.text }}
        </li>
      </ol>
    </div>

    <!--解释一下就是绑定一个class为vue实例里的数据first，first的值为fcss,
    所以最终绑定了一个叫fcss的class属性上去-->
    <div v-bind:class="first">
      <span>v-bind-1</span>
    </div>


    <!--语法结构是v-bind:class="{class的名字:绑定的数据}"-->
    <!--通关绑定数据的布尔值来控制这个css是否显示,boolean为true，所以会显示-->
    <!--如果为flase，则不会绑定上去，这里只有fcss为true，而scss为false，所以只绑定了fcss这个class-->
    <div v-bind:class="{fcss:boolean,scss:bool}">
      <span>v-bind-2</span>
    </div>

    <!--和单独绑定一个css的语法一样，不过用数组是复数绑定而已-->
    <div v-bind:class="[fclass,tclass]">
      <span>v-bind-3</span>
    </div>


    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>



    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br>


    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>


  </div>


</template>

<script>
export default {
  data () {
    return {
      msg: 'instructionCaseOne',
      ok: false,
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      counter: 0,
      first:'fcss',
      boolean:false,
      bool:true,
      fclass:'fcss',
      sclass:'scss',
      tclass:'tcss',
      message:"",
      checkedNames: []
    }
  }
}
</script>

<style>
.fcss{ color:red }
.scss{ color:blue }
.tcss{ color:black }
</style>
