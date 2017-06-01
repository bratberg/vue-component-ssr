import Vue from 'vue'
import Component from './Component.vue'

export default context => {
  return Promise.resolve(
    new Vue({
      render: h => h(Component, context)
    })
  );
}
