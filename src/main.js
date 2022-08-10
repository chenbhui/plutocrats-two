import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/custom-component';//注册自定义组件
// 引入样式
import "@/styles/reset.less";
import "@/styles/global.less";
import "@/styles/animate.less";
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });
new Vue({
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
