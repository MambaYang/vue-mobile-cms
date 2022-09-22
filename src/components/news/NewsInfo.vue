<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="info">
            <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>
        <hr />

        <!-- 新闻内容 -->
        <div class="content" v-html="newsinfo.content"></div>

        <!-- 评论组件 -->
        <comment :newsid="id"></comment>
    </div>
</template>

<script>
import comment from "../sub-components/Comment.vue";
export default {
    data() {
        return {
            newsinfo: {}
        };
    },
    methods: {
        async getNewsInfo() {
            const { data } = await this.$http.get("api/getnew/" + this.id);
            if (data.status === 0) return (this.newsinfo = data.message[0]);
        }
    },
    created() {
        this.getNewsInfo();
    },
    props: ["id"], //路径传值 取得id
    components: {
        comment
    }
};
</script>

<style lang='scss' scoped>
.newsinfo-container {
    padding: 3px;
    .title {
        font-size: 14px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }

    .info {
        color: #26a2ff;
        display: flex;
        justify-content: space-between;
    }
}
</style>
