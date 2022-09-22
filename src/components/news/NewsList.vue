<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url" />
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间:{{item.add_time | dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newslist: [], //新闻列表
        };
    },
    created() {
        this.getNewList();
    },
    methods: {
        async getNewList() {
            const { data } = await this.$http.get("/api/getnewslist");
            if (data.status === 0) return (this.newslist = data.message);
        },
    },
};
</script>

<style lang='scss' scoped>
.mui-media-body {
    h1 {
        font-size: 14px;
    }
    .mui-ellipsis {
        color: #26a2ff;
        display: flex;
        justify-content: space-between;
    }
}
</style>
