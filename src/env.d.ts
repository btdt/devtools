/// <reference types="vite/client" />
/// <reference types="dayjs" />
/// <reference types="lodash" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface Window {
  dayjs: dayjs;
  moment: dayjs;
  lodash: _;
}
