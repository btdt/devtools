import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

export default createRouter({
  history: createWebHashHistory('/devtools/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});
