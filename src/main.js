// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLadda from 'vue-ladda'
import VueSession from 'vue-session'
import "@babel/polyfill";


require("@/assets/js/init-parse.js")
require(`@/../node_modules/slick-carousel/slick/slick.css`);
require("@babel/polyfill");

// require("@/assets/js/jquery.js")
// require("@/assets/js/jquery-ui.js")
// require("@/assets/js/bootstrap.min.js")
// require("@/assets/js/jquery-migrate-1.2.1.min.js")
// require("@/assets/js/jquery.easing.1.3.js")
// require("@/assets/js/superfish.js")
// require("@/assets/js/camera.js")
// require("@/assets/js/mediaelement-and-player.js")
// require("@/assets/js/mep-feature-playlist.js")
// require("@/assets/js/slick.min.js")
// require("@/assets/js/jquery.jrumble.1.3.min.js")
// require("@/assets/js/jquery.sticky.js")
// require("@/assets/js/jquery.queryloader2.js")
// require("@/assets/js/jquery.appear.js")
// require("@/assets/js/jquery.ui.totop.js")
// require("@/assets/js/jquery.equalheights.js")
// require("@/assets/js/jquery.caroufredsel.js")
// require("@/assets/js/jquery.touchSwipe.min.js")
// require("@/assets/js/SmoothScroll.js")
// require("@/assets/js/cform.js")
// require("@/assets/js/scripts.js")

Vue.config.productionTip = false
Vue.use(VueSession)
Vue.component('vue-ladda', VueLadda)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
