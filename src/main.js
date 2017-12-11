import Vue from 'vue';
import App from './App';
import VueUp from 'vueup';
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.config.productionTip = false;

Vue.use(VueUp);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
