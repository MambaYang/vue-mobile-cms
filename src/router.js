<<<<<<< HEAD
import VueRouter from "vue-router";

import HomeContainer from "./components/tabbars/HomeContainer.vue";
import MemberContainer from "./components/tabbars/MemberContainer.vue";
import ShopcarContainer from "./components/tabbars/ShopcarContainer.vue";
import SearchContainer from "./components/tabbars/SearchContainer.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";
import GoodsList from "./components/goods/GoodsList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";
import GoodsDesc from "./components/goods/GoodsDesc.vue";
import GoodsComment from "./components/goods/GoodsComment.vue";

const router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer },
        { path: "/home/newslist", component: NewsList },
        { path: "/home/newsinfo/:id", component: NewsInfo, props: true },
        { path: "/home/photolist", component: PhotoList },
        { path: "/home/photoinfo/:id", component: PhotoInfo, props: true },
        { path: "/home/goodlist", component: GoodsList },
        { path: "/home/goodsinfo/:id", component: GoodsInfo, props: true },
        { path: "/home/goodsdesc/:id", component: GoodsDesc, props: true },
        {
            path: "/home/goodscomment/:id",
            component: GoodsComment,
            props: true,
            name: "goodscmt",
        },
    ],
    linkActiveClass: "mui-active",
});

export default router;
=======
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'

const router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
    ],
    linkActiveClass:'mui-active'
})

export default router
>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792
