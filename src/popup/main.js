import Vue from 'vue'
import App from './App.vue'
import './bootstrap.bundle.min.js'
import './bootstrap.min.css'
// Vue.prototype.$window = window
// Vue.prototype.$appName = window
// Vue.prototype.$thisTabs = browser.tabs
Vue.prototype.$chromeBrowser = chrome

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
