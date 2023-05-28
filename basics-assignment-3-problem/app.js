const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      setTimeout(() => {
        this.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet!";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add5() {
      this.counter += 5;
    },
    add1() {
      this.counter += 1;
    },
  },
});
app.mount("#assignment");
