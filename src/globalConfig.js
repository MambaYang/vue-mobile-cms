import Vue from "vue";
//全局配置MintUI
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

//配置MUI 样式表
import "../lib/mui/css/mui.css";
//导入MUI的扩展图标
import "../lib/mui/css/icons-extra.css";

import "./filters.js";

// import vueSwiper from 'gxd-swiper';
// Vue.use(vueSwiper);

//配置axios
import axios from "axios";
Vue.prototype.$http = axios.create({
    baseURL: "http://www.liulongbin.top:3005",
});
