<template>
    <div class="mui-numbox" data-numbox-min="1" style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input
            id="test"
            class="mui-input-numbox"
            type="number"
            :value="initcount"
            ref="nobox"
            @change="countChanged"
        />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.js";
import { mapMutations } from "vuex";
export default {
    data() {
        return {};
    },
    mounted() {
        // 初始化数字框
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged() {
            // 利用$refs 获取值
            const val = parseInt(this.$refs.nobox.value);
            // 调用mutations 方法更新数量
            this.updateGoodsCount({ id: this.id, count: val });
        },
        ...mapMutations(["updateGoodsCount"])
    },
    props: ["initcount", "id"]
};
</script>

<style lang='scss' scoped>
</style>
