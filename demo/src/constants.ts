import { type AllenFormSchema } from 'allen-form';

export const schema: AllenFormSchema = {
  type: 'object',
  properties: {
    test: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber'
    },
    colorTest: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ColorPicker'
    }
  }
}