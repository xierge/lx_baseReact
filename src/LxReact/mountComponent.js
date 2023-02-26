/*
 * @Date: 2023-02-26 12:07:33
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 15:08:34
 * @FilePath: /lx_baseReact/src/LxReact/mountComponent.js
 * @description:渲染组件
 */

import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
export default function mountComponent(virtualDOM, container, oldDOM) {
  let nextVDOM = null;
  // 判断是否是函数组件
  if (isFunctionComponent(virtualDOM)) {
    nextVDOM = buildFunctionComponent(virtualDOM);
  } else {
    nextVDOM = buildClassComponent(virtualDOM);
  }

  if (isFunction(nextVDOM)) {
    mountComponent(nextVDOM, container, oldDOM);
  } else {
    mountNativeElement(nextVDOM, container, oldDOM);
  }
}

function buildFunctionComponent(virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {});
}

function buildClassComponent(virtualDOM) {
  let component = new virtualDOM.type(virtualDOM.props || {});
  console.log(component);
  let nextVDOM = component.render();
  nextVDOM.component = component;
  return nextVDOM;
}
