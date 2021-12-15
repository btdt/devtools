<template>
  <div class="banner"><img class="logo" src="/icon.svg" />Development Tools</div>
  <a-input ref="search" type="search" placeholder="search..." v-model:value="keyword" />
  <div class="container">
    <template v-for="(item, index) in list" :key="index">
      <router-link class="item" :to="item.path">
        <div class="icon"></div>
        <div class="title">{{ item?.meta?.title || item.name }}</div>
      </router-link>
    </template>
  </div>
</template>

<script setup>
import routes from '@/router/routes.js';
import AInput from '@/components/Input';
import { ref, watch, onMounted } from 'vue';
import { throttle } from 'lodash';

const listSource = routes[1].children;
const list = ref([...listSource]);
const keyword = ref('');

watch(
  keyword,
  throttle((val) => {
    list.value = listSource.filter((item) => {
      const title = item?.meta?.title.toLowerCase();
      const name = item?.name;
      return title.includes(val.toLowerCase()) || name.includes(val.toLowerCase());
    });
  }, 200),
);

const search = ref(null);
onMounted(() => {
  window.addEventListener('keydown', function (e) {
    if (e.key === 'k' && e.ctrlKey) {
      e.preventDefault();
      search.value.focus();
    }
  });
});
</script>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  border-radius: 4px;
  backdrop-filter: blur(20px);
  background-color: rgba(60, 60, 60, 0.88);
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.25), 0px 0px 2.9px rgba(0, 0, 0, 0.22);
}
.logo {
  width: 36px;
  margin-right: 12px;
  user-select: none;
}
.container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 24px -12px 0 -12px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: calc(25% - 48px) 0 0;
  padding: 12px;
  margin: 12px;
  border-radius: 4px;
  backdrop-filter: blur(20px);
  background-color: rgba(60, 60, 60, 0.88);
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.25), 0px 0px 2.9px rgba(0, 0, 0, 0.22);
}
@media only screen and (max-width: 768px) {
  .item {
    flex: calc(50% - 48px) 0 0;
  }
}
@media only screen and (min-width: 768px) {
  .item {
    flex: calc(33.3333% - 48px) 0 0;
  }
}
@media only screen and (min-width: 1024px) {
  .item {
    flex: calc(25% - 48px) 0 0;
  }
}
@media only screen and (min-width: 1600px) {
  .item {
    flex: calc(20% - 48px) 0 0;
  }
}
@media only screen and (min-width: 1920px) {
  .item {
    flex: calc(16.6666% - 48px) 0 0;
  }
}
@media only screen and (min-width: 2560px) {
  .item {
    flex: calc(12.5% - 48px) 0 0;
  }
}
.icon {
  width: 96px;
  height: 96px;
  background-color: #2e2e2e;
}
.title {
  margin-top: 12px;
}

@media (prefers-color-scheme: light) {
  .banner {
    background-color: #ffffff;
    box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11);
  }
  .item {
    background-color: #ffffff;
    box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11);
  }
}
</style>
