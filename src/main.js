// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Row, Col } from 'vant';
import { Popup } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { DatetimePicker } from 'vant';
import { Field } from 'vant';
import { Picker } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Search } from 'vant';
import { Dialog } from 'vant';
import { Loading } from 'vant';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';
import { List } from 'vant';

Vue.use(List);
Vue.use(Toast);
Vue.use(PullRefresh);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Search);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Picker);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Popup);
Vue.use(Row).use(Col);
Vue.use(Cell).use(CellGroup);
Vue.use(Button);

// 全局注册方法
import Prototype from './common/js/globalPrototype'
Vue.use(Prototype)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
