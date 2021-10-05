var app = new Vue({
  el: "#app",
  data: {
    message: "Hello world",
  },
});
var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "This page is" + new Date(),
  },
});
var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});
var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "JavaScript" }, { text: "React" }, { text: "Vue" }],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello vue.js",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue",
  },
});
Vue.component("todo-item1", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>",
});
var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "vegetables" },
      { id: 1, text: "cheese" },
      { id: 3, text: "tomato" },
    ],
  },
});
var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello world",
  },
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});
var app8 = new Vue({
  el: "#app-8",
  data: {
    link: "https://medium.com",
  },
});
var app9 = new Vue({
  el: "#app-9",
  data: {
    title: "Hello Vue.js",
  },
  methods: {
    sayHello: function () {
      return (this.title = "Hello");
    },
  },
});
var app10 = new Vue({
  el: "#app-10",
  data: {
    aLinkToMedium: "<a href='https://medium.com'>Link</a>",
  },
});
new Vue({
  el: "#app-11",
  data: {
    number: 0,
  },
  methods: {
    rollDice: function () {
      let N = Math.floor(Math.random() * 6 + 1);
      this.number = N;
    },
  },
});
