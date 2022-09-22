import Vue from 'vue'
import moment from 'moment'

//定义全局时间过滤器
Vue.filter('dateFormat',function (dateStr) {
    return moment(dateStr).format('YYYY-MM-DD HH:mm:ss')
})