export default [
  {
    name: 'home',
    path: '/',
    meta: {
      title: 'Development Tools',
    },
    component: () => import('@/views/home'),
  },
  {
    name: 'basic',
    path: '/',
    component: () => import('@/views/PageBasic.vue'),
    children: [
      {
        name: 'color-picker',
        path: '/color-picker',
        meta: {
          title: 'Color Picker',
        },
        component: () => import('@/views/color-picker'),
      },
      {
        name: 'date-time',
        path: '/date-time',
        meta: {
          title: 'Date Time',
        },
        component: () => import('@/views/date-time'),
      },
      {
        name: 'base64',
        path: '/base64',
        meta: {
          title: 'Base64',
        },
        component: () => import('@/views/base64'),
      },
      {
        name: 'unicode',
        path: '/unicode',
        meta: {
          title: 'Unicode',
        },
        component: () => import('@/views/unicode'),
      },
      {
        name: 'regex',
        path: '/regex',
        meta: {
          title: 'Regex',
        },
        component: () => import('@/views/regex'),
      },
      {
        name: 'uuid',
        path: '/uuid',
        meta: {
          title: 'UUID',
        },
        component: () => import('@/views/uuid'),
      },
    ],
  },
];
