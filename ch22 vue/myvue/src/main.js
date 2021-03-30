import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 載入 style.stylus
import './style/style.stylus'
// stylus 檔名也可以縮寫 styl
import './style/style1.styl'

createApp(App).use(store).use(router).mount('#app')
