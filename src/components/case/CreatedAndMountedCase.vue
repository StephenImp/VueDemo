new Vue({
el: '#app',
data: {
totalMoney: 0,
productList: []
},
filters: {
},
mounted: function() {
//这个是钩子函数
//如果cartView函数要执行，必须先执行钩子函数
//这个钩子函数完成了对cratView函数的调用
//应该注意的是，使用mounted 并不能保证钩子函数中的 this.$el 在 document 中。为此还应该引入       Vue.nextTick/vm.$nextTick
this.$nextTick(function () {
this.cartView()
})
})
},
methods: {
//这个是要执行的函数
cartView: function() {
var _this = this;
this.$http.get("data/cartData.json", {"id": 123}).then(function(res) {
_this.productList = res.body.result.list;
_this.totalMoney = res.body.result.totalMoney;
});
}
}
}
});
