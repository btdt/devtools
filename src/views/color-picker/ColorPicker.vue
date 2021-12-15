<template>
  <button ref="button" @click="onSelectColor">选择颜色</button>
  <div>{{ color }}</div>
</template>

<script setup>
import { ref } from 'vue';

let color = ref();

async function onSelectColor() {
  const eyeDropper = new window.EyeDropper();
  color.value = await eyeDropper.open();
  console.log(location.pathname.split('/').join('/'));
}
</script>

<style scoped></style>
