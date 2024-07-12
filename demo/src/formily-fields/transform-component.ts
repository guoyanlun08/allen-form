import { each, merge } from '@formily/shared';
import type { Component } from 'vue';
import { defineComponent } from 'vue';
import { h } from 'allen-form';

type ListenersTransformRules = Record<string, string>;

/**
 * 在传给formily conenct之前，提供组件对象的props、event转换
 * 例：transformComponent(ElColorPicker, {}, { size: 'small' });
 */
export const transformComponent = <T extends Record<string, any>>(
  tag: any,
  transformRules?: ListenersTransformRules,
  defaultProps?: Partial<T>,
): Component<T> | any => defineComponent({
  setup(_props, { attrs, slots }) {
    return () => {
      let data = {
        ...attrs,
      };

      if (defaultProps) {
        data = merge(defaultProps, attrs);
      }

      if (transformRules) {
        const listeners = transformRules;
        each(listeners, (event, extract) => {
          data[`on${event[0].toUpperCase()}${event.slice(1)}`] = attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`];
        });
      }

      return h(tag, data, slots);
    };
  },
});
