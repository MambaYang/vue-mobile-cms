<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, i) in lunbotu" :key="i">
            <img :src="item[imgname]" alt :class="[isfull?'img-full':'img-normal']" />
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    data() {
        return {};
    },

    methods: {},
    props: ["lunbotu", "imgname", "isfull"]
};
</script>

<style lang='scss' scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        text-align: center;
        .img-full {
            width: 100%;
            height: 100%;
        }
        .img-normal {
            width: auto;
            height: 100%;
        }
    }
}
</style>
