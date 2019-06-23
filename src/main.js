import Vue from 'vue'

import VueRouter from 'vue-router'


Vue.use(VueRouter)

import './lib/mui-master/dist/css/mui.css'

// 导入所有的 MIntUI 组件
// 导入 MInt-UT
// import MintUI from 'mint-ui' 把所有的组件都导入进来
// 这里 可以省略 node_modules 这一层目录
//  import 'mint-ui/lib/style.css'

// 将 MintUI 安装到 Vue 中
// Vue.use(MintUI) // 把所有组件都注册为全局组件

// 按需导入 Mint-UI 组件

import { Header } from 'mint-ui';

// 使用 Vue.component 注册 固定头部组件

Vue.component(Header.name, Header);
import  app from  './App.vue'

const vm = new Vue({

render:c => c(app)

 //router


}).$mount("#app")






