day1:
    ①搭建vue实例,
    router/index.js   设置路由 就可以直接访问

    http://localhost:8080/#/first

day2:

    ①子父组件引用（components）--- First.vue,Confirm.vue
        父组件给子组件的值通过props接收；子组件通过$emit向父组件传值

    ②使用样式

    ③使用a标签

    ④computed
        当其依赖的属性的值发生变化的时，计算属性会重新计算。反之则使用缓存中的属性值

        (1)getter

        (2)setter
            当赋值给计算属性的时候，将调用setter函数。多用于在模板组件中需要修改计算属性自身的值的时候。


    computed与watch

      computed:
        计算结果并返回，只有当被计算的值发生改变时才会触发
        (即：计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算)

      watch:
        监听某一个值，当被监听的值发生变化时，执行对应的操作
        (与computed的区别是，watch更加适用于监听某一个值的变化并做对应的操作，
        比如请求后台接口等，而computed适用于计算已有的值并返回结果)

        https://blog.csdn.net/qq616592958/article/details/85037679

        用来给表单元素做校验


    ⑤created与mounted    demo有问题

        created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
        mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。





