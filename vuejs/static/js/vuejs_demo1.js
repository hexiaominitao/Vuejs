var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello word'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '吃饭' },
            { text: '睡觉' },
            { text: '打豆豆' }
        ]
    }
})
var app4 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Word!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Word!'
    }
})
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '水果' },
            { id: 2, text: '随便吃啥！' }
        ]
    }
})
var obj = {
    foo: 'bar'
}
Object.freeze(obj)
var app8 = new Vue({
    el: "#app-8",
    data: obj
})
var app9 = new Vue({
        el: "#app-9",
        data: {
            rawHtml: 'hello'
        }
    })
    // var app10 = new Vue({
    //     el: '#app-10',
    //     data: {
    //         firstname: 'foo',
    //         lastname: 'min',
    //         fullname: 'foo min'
    //     },
    //     watch: {
    //         firstname: function(val) {
    //             this.fullname = val + ' ' + this.lastname
    //         },
    //         lastname: function(val) {
    //             this.fullname = this.firstname + ' ' + val
    //         }
    //     }
    // })
var vm = new Vue({
    el: '#app-10',
    data: {
        firstname: 'he',
        lastname: 'min'
    },
    computed: {
        fullname: function() {
            return this.firstname + " " + this.lastname
        }
    }
})
var app11 = new Vue({
    el: '#app-11',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(envent) {
            alert('Hello' + this.name + '!')
            if (envent) {
                alert(envent.target.tagName)
            }
        }
    }
})