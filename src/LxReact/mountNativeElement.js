/*
 * @Date: 2023-02-25 15:00:51
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 15:15:53
 * @FilePath: /lx_baseReact/src/LxReact/mountNativeElement.js
 * @description: 渲染virtualDOM
 */
import createDOM from "./createDOM";
export default function mountNativeElement(virtualDOM, container, oldDOM) {
  let newElement = createDOM(virtualDOM);
  if (oldDOM) {
  } else {
    container.appendChild(newElement);
  }

  let component = virtualDOM.component;
  if (component) {
    component.setDOM(newElement);
  }
}
