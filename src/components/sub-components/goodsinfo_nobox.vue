<template>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input
            id="test"
            class="mui-input-numbox"
            type="number"
            value="1"
            ref="nobox"
            @change="countChanged"
        />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.js";
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
            const val = this.$refs.nobox.value;
            // 向父组件传值
            this.$emit("func", parseInt(val));
        }
    },
    props: ["max"],
    watch: {
        max: (newval, oldval) => {
            // 每当监听到max值得改变，重新为数字框手动设置最大值
            mui(".mui-numbox")
                .numbox()
                .setOption("max", newval);
        }
    }
};
</script>

<style lang='scss' scoped>
</style>
