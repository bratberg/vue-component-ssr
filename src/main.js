import Vue from 'vue'
import Component from './Component.vue'

new Vue({
  el: '#component',
  render: (h) => {
    return h(Component)
  }
})
