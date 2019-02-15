Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">点击了我 {{ count }} 次</button>'
});
new Vue({
  el: "#button1"
});
new Vue({
  el: "#app",
  data: {
    date: new Date()
  },
  mounted: function() {
    var _this = this;
    this.timer = setInterval(function() {
      _this.fate = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
});
new Vue({
  el: "#app2",
  data: {
    show: true
  },
  methods: {
    handleClose: function() {
      this.close();
    },
    close: function() {
      this.show = false;
    }
  }
});
var sum = new function(num1, num2) {
  return num1 + num2;
}();
new Vue({
  el: "#app3",
  data: {
    message: ""
  }
});
Vue.component("my-compent", {
  template: `
    <div>
    <button @click="handleIncrease">+1</button>
    <button @click="handleReduce">-1</button>
    </div>`,
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    handleIncrease: function() {
      this.counter++;
      this.$emit("increase", this.counter);
    },
    handleReduce: function() {
      this.counter--;
      this.$emit("reduce", this.counter);
    }
  }
});

var app4 = new Vue({
  el: "#app4",
  data: {
    total: 0
  },
  methods: {
    handleGetTotal: function(total) {
      this.total = total;
    }
  }
});
