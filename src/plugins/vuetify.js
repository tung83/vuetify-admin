import Vue from 'vue'
import 'vuetify/src/stylus/app.styl'
import theme from './theme'
import '@mdi/font/css/materialdesignicons.css'


import { Ripple } from 'vuetify/lib/directives'
import Vuetify, { VLayout, VList } from 'vuetify/lib'


Vue.use(Vuetify, {
  components: { 
    VLayout,
    VList },
  directives: {
    Ripple
  },
  iconfont: 'md',
  theme
})
