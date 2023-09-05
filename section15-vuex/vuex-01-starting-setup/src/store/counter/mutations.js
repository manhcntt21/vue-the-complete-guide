export default {
  increment(context) {
    // gia tri o day la mutation
    // run asynchronous code
    setTimeout(function () {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    // gia tri o day la mutation
    // run asynchronous code
    console.log(context);
    console.log(context.state);
    setTimeout(function () {
      context.commit('increase', payload);
    }, 2000);
  },
};
