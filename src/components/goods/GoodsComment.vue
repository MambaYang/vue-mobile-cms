<template>
    <cmtbox :newsid="id"></cmtbox>
</template>

<script>
import cmtbox from "../sub-components/Comment.vue";
export default {
    data() {
        return {};
    },
    methods: {},
    components: {
        cmtbox
    },
    props: ["id"]
};
</script>

<style lang='scss' scoped>
</style>
