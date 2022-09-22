<template>
    <div class="photoinfo-container">
        <h3 class="title">{{photoinfo.title}}</h3>

        <p class="info">
            <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>

        <hr />

        <!-- 缩略图 -->
        <div class="thumb-img-list">
            <img :src="item.src" alt v-for="(item,i) in photolist" :key="i" />
            <xd-thumb-swiper
                :autoplay="autoplay"
                :height="height"
                :width="width"
                :animation="animation"
                :next-prve-button="nextPrveButton"
                :border="border"
                :bg="bg"
                :custom-css="customCss"
                :list="list"
            ></xd-thumb-swiper>
        </div>

        <!-- 内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>
        <!-- 评论子组件 -->
        <comment :newsid="id"></comment>
    </div>
</template>

<script>
import comment from "../sub-components/Comment.vue";
import vueSwiper from "gxd-swiper";
let { XdSwiper, XdThumbSwiper } = vueSwiper;
export default {
    data() {
        return {
            photoinfo: [],
            photolist: [],
            height: 400, //轮播图高度
            width: 360, //轮播图宽度
            autoplay: 3000, //轮播图自动轮播毫秒,0=>不轮播
            nextPrveButton: true, //显示左右上一张和下一张按钮
            border: "1px solid #fff", //边框样式
            customCss: "", //分页器自定义样式名称
            animation: "slide", //cube,fade,coverflow,flip,slide 默认slide
            bg: "#f8f8f8",
            list: [
                //列表图片
            ]
        };
    },
    created() {
        this.getPhotoInfo();
        this.getThumblmg();
    },
    methods: {
        async getPhotoInfo() {
            const { data } = await this.$http.get(
                "/api/getimageInfo/" + this.id
            );
            if (data.status === 0) return (this.photoinfo = data.message[0]);
        },
        async getThumblmg() {
            //获取图片的缩略图数据
            const { data } = await this.$http.get(
                "/api/getthumimages/" + this.id
            );
            if (data.status === 0) {
                // this.photolist = data.message;
                data.message.forEach((item, index) => {
                    this.list.push({
                        image: item.src,
                        url: "https://fanyi.baidu.com/"
                    });
                });
            }
        }
    },
    props: ["id"],

    components: {
        comment,
        XdSwiper,
        XdThumbSwiper
    }
};
</script>

<style lang='scss' scoped>
.photoinfo-container {
    padding: 3px;
    .title {
        font-size: 15px;
        text-align: center;
        margin: 10px 0;
        color: #26a2ff;
    }
    .info {
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }

    .content {
        font-size: 13px;
        line-height: 30px;
    }

    .thumb-img-list {
        .xd-thumb-swiper {
            margin: 0 auto;
        }
    }
}
</style>
