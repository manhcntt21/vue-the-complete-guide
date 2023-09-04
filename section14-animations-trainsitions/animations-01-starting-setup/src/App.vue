<template>
  <!--  cach moi -->
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!--  cach cu -->
  <!-- <transition name="fade-button">
    <router-view> </router-view>
  </transition> -->
</template>

<script>
// import UsersList from './components/UsersList.vue';

export default {
  // components: { UsersList },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 1;
    },

    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        // console.log(round);
        if (round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },

    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        // console.log(round);
        if (round > 10) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },

    enterCancelled(el) {
      console.log('enterCancelled');
      console.log(el);
      clearInterval(this.enterInterval);
    },

    leaveCancelled(el) {
      console.log('leaveCancelled');
      console.log(el);
      clearInterval(this.leaveInterval);
    },

    showUser() {
      this.usersAreVisible = true;
    },
    hideUser() {
      this.usersAreVisible = false;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },

    animateBlock() {
      this.animatedBlock = true;
    },

    tagggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0px) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.5);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-from {
}
.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}
.route-live-active {
  animation: slide-fade 0.4s ease-in;
}
.route-enter-to {
}
</style>
