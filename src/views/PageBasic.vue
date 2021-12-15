<template>
  <div class="page">
    <div class="nav-box">
      <button class="back" aria-label="返回" @click="back">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path
            d="M9.16 16.37a.5.5 0 10.67-.74L3.67 10H17.5a.5.5 0 000-1H3.67l6.16-5.63a.5.5 0 00-.67-.74L2.24 8.94a.75.75 0 000 1.11l6.92 6.32z"
          ></path>
        </svg>
      </button>
      <nav class="nav" aria-label="导航">
        <h2 class="nav-item"><router-link class="nav-link" to="/">首页</router-link></h2>
        <h2 class="nav-item current">/ {{ title }}</h2>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const route = getCurrentInstance().proxy.$route;
const title = route?.meta?.title;

function back() {
  window.history.back();
}
</script>

<style scoped>
.page {
  margin: 24px 32px;
}
.nav-box {
  display: flex;
  align-items: center;
}
.back {
  cursor: pointer;
  display: inline-flex;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;
  line-height: 1;
  font-family: inherit;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  border: 2px solid transparent;
  border-radius: 2px;
  color: #ffffff;
  background: #333333;
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  min-width: 36px;
  background: transparent;
  margin-inline-start: -40px;
  fill: #4ea1e1;
}
.nav {
  display: flex;
  overflow: hidden;
  flex-flow: row;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-inline-end: 4px;
}
.nav-item {
  margin-top: 0;
  transition: all 0.2s ease-in-out;
  margin-bottom: 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 28px;
  cursor: default;
  font-weight: 600;
}
.nav-link {
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  padding-inline-end: 6px;
  padding-inline-start: 4px;
  color: #4ea1e1;
}
</style>
