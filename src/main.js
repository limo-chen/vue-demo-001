console.log(window.vue);

const Vue = window.vue;

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      n: 0,
    };
  },
  template: `
  <div class="red">
  {{n}}
<button @click="add">+1</button>
</div>
  `,
  methods: {
    add() {
      this.n += 1;
    },
  },
}).$mount("#app");
