import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
    },
    // {
    //   path: '/',
    //   redirect: '/teams',
    // },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamFooter,
      },
      // alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':id',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UserFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  // linkActiveClass: 'active',
  // vue router tu dong goi khi change url
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});
router.beforeEach(function (to, from, next) {
  console.log('Global beforEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth');
    next();
  } else {
    next();
  }

  // next(false);
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { id: 't2' } });
  // }
  // next(true);
});
const app = createApp(App);
app.use(router);
app.mount('#app');
