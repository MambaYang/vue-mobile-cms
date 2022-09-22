<template>
    <div class="goodsinfo-container">
        <!-- 要实现动画的小球 -->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="flag"></div>
        </transition>

        <!-- 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotu="lunbotu" :imgname="'src'"></swiper>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        市场价：
                        <span style="margin-right:10px;">
                            <del>￥{{goodsinfo.market_price}}</del>
                        </span>
                        销售价：
                        <span
                            style="font-size:16px;color:red;font-weight:bold;"
                        >￥{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>
                        购买数量：
                        <!-- max 是库存量 -->
                        <nobox :max="goodsinfo.stock_quantity" @func="getSelectedCount"></nobox>
                    </p>
                    <div>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodsinfo.add_time|dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer btnarea">
                <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>

                <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "../sub-components/Swiper.vue";
import nobox from "../sub-components/goodsinfo_nobox.vue";
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            lunbotu: [],
            goodsinfo: {},
            flag: false, //小球的显示与隐藏
            selectedCount: 1
        };
    },
    created() {
        this.getlunbotu();
        this.getGoodsInfoById();
    },

    methods: {
        ...mapMutations(["addToCar"]),
        async getlunbotu() {
            const { data } = await this.$http.get(
                "/api/getthumimages/" + this.id
            );
            if (data.status == 0) return (this.lunbotu = data.message);
        },

        async getGoodsInfoById() {
            const { data } = await this.$http.get(
                "/api/goods/getinfo/" + this.id
            );
            if (data.status == 0) return (this.goodsinfo = data.message[0]);
        },
        goDesc() {
            //点击按钮 跳转到描述页面
            this.$router.push("/home/goodsdesc/" + this.goodsinfo.id);
        },
        goComment() {
            this.$router.push({
                name: "goodscmt",
                params: { id: this.goodsinfo.id }
            });
        },
        addToCart() {
            // 点击加入购物车
            this.flag = !this.flag;
            this.addToCar({
                id: this.id,
                count: this.selectedCount,
                selected: true,
                price: this.goodsinfo.sell_price
            });
        },
        beforeEnter(el) {
            el.style.transform = "translate(0,0)";
        },
        enter(el, done) {
            el.offsetWidth;

            // 动态获取小球坐标
            const ballPos = el.getBoundingClientRect();
            // 徽标坐标
            const badgePos = document
                .getElementById("badge")
                .getBoundingClientRect();
            const left = badgePos.left - ballPos.left;
            const top = badgePos.top - ballPos.top;

            el.style.transform = "translate(" + left + "px," + top + "px)";
            el.style.transition = "all .5s cubic-bezier(.49,-0.41,.83,.67) ";
            done();
        },
        afterEnter(el) {
            this.flag = !this.flag;
        },
        getSelectedCount(c) {
            // 获取选择的商品的数量
            // 把最新的数量值保存到data中，方便用户点击加入购物车按钮时候，把数量值同步到徽标中
            this.selectedCount = c;
        }
    },
    props: ["id"],
    components: {
        Swiper,
        nobox
    }
};
</script>

<style lang='scss' scoped>
html {
    font-size: 24px;
}
.goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
    .btnarea {
        flex-direction: column;
        button + button {
            margin-top: 15px;
        }
    }
}

.ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    left: 50rem;
    top: 130rem;
    // transform: translate(29rem, 131rem);
}
</style>
