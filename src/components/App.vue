<template>
    <div class="app-container">
        <!-- Header -->
        <mt-header fixed title="Vue项目">
<<<<<<< HEAD
            <span slot="left" @click="goBack" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>

        <transition>
            <router-view></router-view>
        </transition>

        <!-- tabbar -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="my-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="my-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="my-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="badge">{{totalcount}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="my-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
=======
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>


        <router-view></router-view>

        <!-- tabbar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            // 默认显示返回
            flag: true
        };
    },
    methods: {
        goBack() {
            // 向后跳转
            this.$router.go(-1);
        }
    },
    created() {
        if (this.$route.path == "/home") {
            this.flag = false;
        } else {
            this.flag = true;
        }
    },
    watch: {
        "$route.path": function(newVal, oldVal) {
            if (newVal == "/home") {
                this.flag = false;
            } else {
                this.flag = true;
            }
        }
    },
    computed: {
        ...mapGetters(["totalcount"])
    }
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
html {
    font-size: 4px;
}
.app-container {
    padding-top: 40px;
    padding-bottom: 50px;
}
.mint-header {
    z-index: 99;
}

.mui-bar-tab .my-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .my-tab-item.mui-active {
    color: #007aff;
}

.mui-bar-tab .my-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .my-tab-item .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

//动画效果相关的类样式
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease;
}
=======

>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792
</style>