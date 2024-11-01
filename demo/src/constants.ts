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
    },
    experimentConfig: {
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      items: {
        type: 'object',
        properties: {
          column1: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: '容器Id',
              align: 'center'
            },
            properties: {
              containerId: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'PreviewText.Input'
              }
            }
          },
          column2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: '实验Id',
              align: 'center',
              asterisk: true
            },
            properties: {
              experimentId: {
                type: 'string',
                'x-validator': [{ required: true, message: '请输入容器实验Id' }],
                'x-decorator': 'FormItem',
                'x-component': 'Input'
              }
            }
          }
        }
      }
    }
  }
};
