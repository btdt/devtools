<template><div>{{ uuid }}</div><button @click="refresh()">refresh</button></template>

<script setup>
import { ref } from 'vue';

function getUuid() {
  const url = URL.createObjectURL(new Blob([]));
  const uuid = url.slice(url.lastIndexOf('/') + 1);
  URL.revokeObjectURL(url);
  return uuid;
}

let uuid = ref('');

function refresh() {
  uuid.value = getUuid();
}
refresh();
</script>
