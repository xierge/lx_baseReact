/*
 * @Date: 2023-02-25 10:46:44
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 22:44:49
 * @FilePath: /lx_baseReact/src/LxReact/render.js
 * @description: ReactDOM.render函数
 */
import diff from "./diff";
export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild
) {
  diff(virtualDOM, container, oldDOM);
}
