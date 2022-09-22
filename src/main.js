//项目的入口文件

<<<<<<< HEAD
import Vue from "vue";
=======
import Vue from 'vue'
import App from './components/App.vue'
//全局配置MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//配置MUI 样式表
import '../lib/mui/css/mui.min.css'
//导入MUI的扩展图标
import '../lib/mui/css/icons-extra.css'

//配置axios
import axios from 'axios'
Vue.prototype.$http=axios.create({
    baseURL:'http://www.liulongbin.top:3005'
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'
>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792

import "./globalConfig.js";

//配置路由
import VueRouter from "vue-router";
Vue.use(VueRouter);

import router from "./router";

// 导入状态管理对象
import store from "./store.js";

import App from "./components/App.vue";
const vm = new Vue({
<<<<<<< HEAD
    el: "#app",
    render: (c) => c(App),
    router,
    store,
});
=======
    el:'#app',
    render:c => c(App),
    router
})
>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792
