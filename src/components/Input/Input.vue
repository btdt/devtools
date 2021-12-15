<template>
  <div class="input-box" :class="{ active }">
    <div v-if="!!props.type" class="input-icon-box">
      <a-icon class="input-icon" :type="props.type" />
    </div>
    <input
      class="input"
      :class="[allowClear && 'input-allow-clear']"
      ref="input"
      v-model="inputValue"
      autofocus
      autocomplete="off"
      :placeholder="props.placeholder"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keypress="onKeypress"
    />
    <a-icon class="input-clear" type="clear" v-show="inputValue.length" @click="handleClear" />
  </div>
</template>

<script setup>
import AIcon from '@/components/Icon';
import { ref, watch } from 'vue';

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
    validator: function (val) {
      return ['search'].includes(val);
    },
  },
  placeholder: {
    type: String,
    default: '',
  },
  allowClear: {
    type: Boolean,
    default: true,
  },
});

let active = ref(false);
function onFocus() {
  active.value = true;
}
function onBlur() {
  active.value = false;
}

const inputValue = ref(props.value);
const emit = defineEmits(['input', 'change', 'search', 'update:value']);

function onInput(e) {
  emit('input', e);
}
function onKeypress({ key }) {
  if (key === 'Enter') {
    emit('search', inputValue.value);
  }
}
watch(inputValue, (val) => {
  emit('change', val);
  emit('update:value', val);
});

watch(
  () => props.value,
  (val) => {
    inputValue.value = val;
  },
);

function handleClear() {
  emit('update:value', '');
}

const input = ref(null);
function focus() {
  input.value.focus();
}
defineExpose({
  focus,
  active,
});
</script>

<style scoped>
.input-box {
  width: 100%;
  height: 32px;
  display: flex;
  margin-top: 24px;
  border-radius: 2px;
  position: relative;
  border: 1px solid #6b6b6b;
  background-color: #2b2b2b;
  transition: all 0.2s ease-in-out;
}
.input-box:hover {
  border: 1px solid #929292;
}
.active {
  border: 1px solid #808080;
  box-shadow: 0 0 0 1px #808080 inset;
}
.input-icon-box {
  min-width: 20px;
  min-height: 20px;
  display: flex;
  margin-left: 9px;
  align-items: center;
  justify-content: center;
}
.input-icon {
  width: 20px;
  height: 20px;
  fill: #ffffff;
  margin: auto 12px auto 3px;
}
.input {
  width: 100%;
  font-size: 18px;
  background: transparent;
  border: none;
  color: #ffffff;
  padding: 3px 0;
}
.input:active,
.input:focus,
.input:hover {
  border: none;
  box-shadow: none;
  outline: none;
}
.input-allow-clear {
  padding-right: 32px;
}
.input-clear {
  width: 14px;
  height: 14px;
  position: absolute;
  right: 9px;
  top: 9px;
  fill: #bfbfbf;
  cursor: pointer;
  transition: fill 0.3s;
}
.input-clear:hover {
  fill: #8c8c8c;
}

@media (prefers-color-scheme: light) {
  .input-box {
    background-color: #ffffff;
    border-color: #bebebe;
  }
  .input-box:hover {
    border-color: #979797;
  }
  .active {
    border-color: #888888;
    box-shadow: 0 0 0 1px #888888 inset;
  }
  .input-icon {
    fill: #262626;
  }
  .input {
    color: #2b2b2b;
  }
}
</style>
