Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">点击了我 {{ count }} 次</button>'
})
new Vue({
    el: '#button1'
})