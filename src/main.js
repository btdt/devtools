import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './router/guard.js';

import dayjs from 'dayjs';
import _ from 'lodash';

window.dayjs = dayjs;
window.moment = dayjs;
window.lodash = _;
window._ = _;

const app = createApp(App);

app.use(router).mount('#app');
