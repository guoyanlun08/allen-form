<template>
  <allen-form
    v-model="values"
    :schema="schema"
    :external-components="externalComponents"
    :initial-values="{ test: 123 }"
  />
  <button @click="handleClick">点我</button>
</template>

<script setup lang="ts">
import 'allen-form/style';
import { AllenForm } from 'allen-form';

import { ref } from 'vue';

import ColorPicker from './formily-fields/color-picker';
import { schema } from './constants';

const values = ref({});
const externalComponents = {
  ColorPicker
};

const handleClick = () => {
  console.log(values.value);
};
</script>
