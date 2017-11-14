
import Vue from "vue";

import App from "./App.vue";

import "./root.css";

var vm = new Vue({
    el: "#app",
    // render: function (createElement) {
    //     return createElement(App);
    // },
    render: createElement => createElement(App)
});





