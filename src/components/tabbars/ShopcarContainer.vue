<template>
<<<<<<< HEAD
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content" v-for="item in goodslist" :key="item.id">
                    <div class="mui-card-content-inner goods-item">
                        <!-- 开关 -->
                        <mt-switch
                            v-model="selectedObj[item.id]"
                            @change="changeSelect(item.id,selectedObj[item.id])"
                        ></mt-switch>
                        <img :src="item.thumb_path" alt />
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <div class="goods-info">
                                <span class="price">￥{{item.sell_price}}</span>
                                <nobox :initcount="countObj[item.id]" :id="item.id"></nobox>
                                <a href="#" @click.prevent="del(item.id)">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 结算区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计(不包含运费)</p>
                            <p>
                                已勾选商品
                                <span class="danger">{{selectedcount}}</span>件,总价
                                <span class="danger">￥{{amount}}</span>
                            </p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
            <!-- {{JSON.stringify(selectedObj)}} -->
        </div>
=======
    <div>
        <h3>ShopcarContainer</h3>
>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792
    </div>
</template>

<script>
<<<<<<< HEAD
import nobox from "../sub-components/shopcar_nobox.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
    data() {
        return {
            goodslist: []
        };
    },
    created() {
        this.getGoodsList();
    },
    methods: {
        ...mapMutations(["delFromFCart", "changeSelectState"]),
        async getGoodsList() {
            if (this.idstr.length <= 0) return;
            const { data } = await this.$http.get(
                "/api/goods/getshopcarlist/" + this.idstr
            );
            if (status == 0) return (this.goodslist = data.message);
        },
        del(id) {
            this.goodslist.some((item, i) => {
                if (item.id == id) {
                    this.goodslist.splice(i, 1);
                    return true;
                }
            });
            this.delFromFCart(id);
        },
        changeSelect(id, select) {
            // 更改开关的状态
            this.changeSelectState({ id, selected: select });
        }
    },
    components: {
        nobox
    },
    computed: {
        ...mapGetters([
            "idstr",
            "countObj",
            "selectedObj",
            "selectedcount",
            "amount"
        ])
    }
=======
export default {
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.shopcar-container {
    background-color: #eee;
    overflow: hidden;

    .goods-item {
        display: flex;
        img {
            width: 60px;
            height: 60px;
        }
        h1 {
            font-size: 13px;
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .goods-info {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .prce {
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
}

.danger {
    color: red;
    font-weight: bold;
    font-size: 16px;
}

.jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
=======

>>>>>>> 1aebbd222d43b72c6cbfebd6f72615891dfca792
</style>