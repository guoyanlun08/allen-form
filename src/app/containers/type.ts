export enum BaseContainerEvent {
  /** 初始化 */
  Init = 'init',
  /** 表单值更新 */
  UpdateValue = 'update:modelValue',
  /** 表单事件触发时触发，仅用于监听手动操作 */
  InputChange = 'inputChange',
  /** 监听某个字段初始化 */
  FieldInit = 'fieldInit',
}
