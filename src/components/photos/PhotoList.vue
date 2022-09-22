<template>
    <div id="slider" class="mui-slider">
        <div
            id="sliderSegmentedControl"
            class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
            <div class="mui-scroll">
                <span
                    :class="['mui-control-item',item.id===0?'mui-active':'']"
                    v-for="item in category"
                    :key="item.id"
                    @tap="getPhotoByCategory(item.id)"
                >{{item.title}}</span>
            </div>

            <ul class="lazyul">
                <router-link
                    tag="li"
                    v-for="item in photolist"
                    :key="item.id"
                    :to="'/home/photoinfo/'+item.id"
                >
                    <img v-lazy="item.img_url" />
                    <div class="info">
                        <h1 class="info-title">{{item.title}}</h1>
                        <div class="info-content">{{item.zhaiyao}}</div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.js";

export default {
    data() {
        return {
            category: [],
            photolist: []
        };
    },
    created() {
        this.getPhotoCategory();
        this.getPhotoByCategory(0);
    },
    methods: {
        async getPhotoCategory() {
            const { data } = await this.$http.get("/api/getimgcategory");
            if (data.status === 0) {
                data.message.unshift({ title: "全部", id: 0 });
                this.category = data.message;
            }
        },
        async getPhotoByCategory(id) {
            const { data } = await this.$http.get("/api/getimages/" + id);
            if (data.status === 0) return (this.photolist = data.message);
        }
    },
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
};
</script>

<style lang='scss' scoped>
.mui-slider {
    touch-action: pan-x;
}

.lazyul {
    margin-top: 40px;
    padding: 10px;

    li {
        text-align: center;
        background-color: #ccc;
        position: relative;
        & + li {
            margin-top: 10px;
        }
        img {
            vertical-align: middle;
            width: 100%;
        }
        img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
    }

    .info {
        position: absolute;
        bottom: 0;
        color: #fff;
        text-align: left;
        text-indent: 2em;
        max-height: 86px;
        overflow: hidden;
        .info-title {
            font-size: 14px;
        }
        .info-content {
            font-size: 13px;
        }
    }
}
</style>
