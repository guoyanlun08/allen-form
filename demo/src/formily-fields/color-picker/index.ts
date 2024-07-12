import { ElColorPicker } from 'element-plus';
import { connect, mapProps } from 'allen-form';
import { transformComponent } from '../transform-component';

const TransformElColorPicker = transformComponent(ElColorPicker, {}, { size: 'small' });

export const ColorPicker = connect(TransformElColorPicker, mapProps({
  readOnly: 'readonly',
  value: 'modelValue',
}));

export default ColorPicker;
