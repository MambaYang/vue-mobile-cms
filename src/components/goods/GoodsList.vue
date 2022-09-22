<template>
    <div>
        <div class="goods-list">
            <router-link
                tag="div"
                :to="'/home/goodsinfo/'+item.id"
                class="goods-item"
                v-for="item in goodslist"
                :key="item.id"
            >
                <img :src="item.img_url" alt />
                <h1 class="title">{{item.title}}</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥{{item.sell_price}}</span>
                        <span class="old">￥{{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余{{item.stock_quantity}}件</span>
                    </p>
                </div>
            </router-link>

            <mt-button type="danger" size="large" style="margin-top:10px" @click="getMore">加载更多</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
            goodslist: [],
            isloaded: false //节流阀 表示没有加载完毕
        };
    },
    created() {
        this.getGoodsLsitByPage();
    },
    methods: {
        async getGoodsLsitByPage() {
            const { data } = await this.$http.get(
                "/api/getgoods?pageindex=" + this.page
            );
            if (status == 0) {
                if (data.message.length <= 0) {
                    this.isloaded = true;
                }
                this.goodslist = this.goodslist.concat(data.message);
            }
        },
        getMore() {
            if (this.isloaded) return;
            this.page++;
            this.getGoodsLsitByPage();
        }
    }
};
</script>

<style lang='scss' scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
    padding-top: 0;
    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        margin-top: 7px;
        box-shadow: 0 0 7px #ccc;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            width: 100%;
            min-height: 170px;
        }

        .title {
            font-size: 14px;
        }

        .info {
            background-color: #eee;
            overflow: hidden;
            p {
                margin: 3px;
            }
            .price {
                .new {
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                    margin-right: 15px;
                }

                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                }
            }

            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>
