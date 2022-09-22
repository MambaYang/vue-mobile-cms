import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 每当初始化项目的时候，就先从localStorage 中取一下数据
let car = window.JSON.parse(localStorage.getItem("cart") || "[]");
// if (car == null) localStorage.setItem("cart", window.JSON.stringify([]));

// 创建状态管理对象实例
const store = new Vuex.Store({
    state: {
        // 在cart中 应该把每个商品，储存为一个对象 {id,count}
        cart: car,
    },
    mutations: {
        addToCar(state, goods) {
            // 将商品添加到购物车
            // 如果购物车中 已经存在这条商品，则只更新数量，如果没有则直接push

            let result = state.cart.find((val) => val.id == goods.id);
            if (result) {
                result.count += goods.count;
            } else {
                state.cart.push(goods);
            }

            // 存储到localStorage 中
            localStorage.setItem("cart", window.JSON.stringify(state.cart));
        },
        updateGoodsCount(state, goods) {
            // 根据传递过来的商品的信息，更新购物车中商品的数量
            state.cart.some((item) => {
                if (item.id == goods.id) {
                    item.count = goods.count;
                    return true;
                }
            });
            localStorage.setItem("cart", window.JSON.stringify(state.cart));
        },
        delFromFCart(state, id) {
            // 根据id删除vuex中对应的商品
            state.cart.some((item, i) => {
                if ((item.id = id)) {
                    state.cart.splice(i, 1);
                    return true;
                }
            });
            localStorage.setItem("cart", window.JSON.stringify(state.cart));
        },
        changeSelectState(state, obj) {
            state.cart.some((item) => {
                if (item.id == obj.id) {
                    item.selected = obj.selected;
                    return true;
                }
            });
            localStorage.setItem("cart", window.JSON.stringify(state.cart));
        },
    },
    getters: {
        totalcount(state) {
            // 徽标中商品数量
            let c = 0;
            // getters 的特性，只要依赖的数据变化了，必然会重新计算这个 getters 的值
            state.cart.forEach((item) => (c += item.count));
            return c;
        },
        idstr(state) {
            // 获取购物车中所有的商品的ID字符串
            let arr = [];
            state.cart.forEach((item) => arr.push(item.id));
            return arr.join(",");
        },
        countObj(state) {
            // 获取购物车中 商品的id和商品数量的键值对 对应关系
            let o = {};
            state.cart.forEach((item) => (o[item.id] = item.count));
            return o;
        },
        selectedObj(state) {
            // id 对应的商品是否被选中了
            let o = {};
            state.cart.forEach((item) => (o[item.id] = item.selected));
            return o;
        },
        selectedcount(state) {
            // 勾选商品的数量
            let c = 0;
            state.cart.forEach((item) => {
                // 只有这一项商品被选中了，才把数量加起来
                if (item.selected) c += item.count;
            });
            return c;
        },
        amount(state) {
            // 总价
            let c = 0;
            state.cart.forEach((item) => {
                if (item.selected) {
                    c += item.count * item.price;
                }
            });
            return c;
        },
    },
});
export default store;
