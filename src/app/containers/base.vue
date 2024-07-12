<template>
  <form-provider :form="form">
    <schema-field :schema="schema" :components="components" />
  </form-provider>
</template>

<script setup lang="ts">
import 'element-plus/dist/index.css';
import {
  createForm,
  type GeneralField,
  onFieldInit,
  onFormInit,
  onFormInputChange,
  onFormValuesChange
} from '@formily/core';
import { createSchemaField, FormProvider, type ISchema } from '@formily/vue';
import { type Component, computed, type PropType, watch } from 'vue';

import { BaseContainerEvent } from './type';
import { defaultComponents } from '@/app/components';

const emit = defineEmits([
  BaseContainerEvent.Init,
  BaseContainerEvent.UpdateValue,
  BaseContainerEvent.InputChange,
  BaseContainerEvent.FieldInit
]);

const props = defineProps({
  // Schema
  schema: {
    type: Object as PropType<ISchema>,
    required: true
  },
  // 表单初始值
  initialValues: {
    type: Object as PropType<Record<string, unknown>>,
    required: false,
    default: () => ({})
  },
  // 表单值
  modelValue: {
    type: Object as PropType<Record<string, unknown>>,
    required: true
  },
  // 额外的表单项组件集对象；key为组件名，value为组件
  externalComponents: {
    type: Object as PropType<Record<string, Component>>,
    required: false,
    default: () => ({})
  }
});

const { SchemaField } = createSchemaField({});

const form = createForm({
  effects() {
    // 表单初始化
    onFormInit((form) => {
      form.setInitialValues(props.initialValues || {});
      form.setValues(props.modelValue);
      emit(BaseContainerEvent.Init, form);
    });

    // 表单值变化
    onFormValuesChange((form) => {
      emit(BaseContainerEvent.UpdateValue, form.values);
    });

    // 表单事件触发时触发，仅用于监听手动操作
    onFormInputChange((form) => {
      emit(BaseContainerEvent.InputChange, form.values);
    });

    // formily Field模型初始化
    onFieldInit('*', (field: GeneralField, form) => {
      emit(BaseContainerEvent.FieldInit, field, form);
    });
  }
});

watch(
  () => props.modelValue,
  () => {
    form.setValues(props.modelValue);
  }
);

const components = computed(() => ({
  ...defaultComponents,
  ...props.externalComponents
}));

defineExpose({
  form
});
</script>
<style scoped></style>
