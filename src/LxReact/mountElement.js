/*
 * @Date: 2023-02-25 14:53:13
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 12:09:45
 * @FilePath: /lx_baseReact/src/LxReact/mountElement.js
 * @description: 渲染元素
 */

import isFunction from "./isFunction";
import mountComponent from "./mountComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountElement(virtualDOM, container, oldDOM) {
  if (isFunction(virtualDOM)) {
    mountComponent(virtualDOM, container, oldDOM);
  } else {
    mountNativeElement(virtualDOM, container, oldDOM);
  }
}
