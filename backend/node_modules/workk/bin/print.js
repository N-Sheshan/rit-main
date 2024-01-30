/**
 * 根据模板和数据输出内容
 * @param {string | string[]} template
 * @param {Object} data
 */
export default (template, data) => {
  const _template = [].concat(template);
  const reg = /(?<!\\)\$[A-Za-z_$][\w$]*/g;
  _template.forEach(str => console.log(str.replace(reg, key => data[key.slice(1)] || "无")));
};
