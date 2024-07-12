import AllenForm from '@/app/containers/base.vue';
import { type AllenFormSchema } from './schema';

// 确保外部自定义组件引用同一个@formily/vue（TODO:依赖引用不同问题，待具体查）
export * from '@formily/vue';

export {
  AllenForm,
  type AllenFormSchema,
};
