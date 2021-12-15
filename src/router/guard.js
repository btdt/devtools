import router from './index.js';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

nProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  nProgress.start();
  next();
});

router.afterEach((to, from) => {
  nProgress.done();
});
