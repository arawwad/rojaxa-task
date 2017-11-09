import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/components/User/Signup';
import Signin from '@/components/User/Signin';
import main from '@/components/main';
import NewTask from '@/components/NewTask';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/new',
      name: 'NewTask',
      component: NewTask,
    },
  ],
});
