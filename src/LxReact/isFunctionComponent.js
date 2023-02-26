/*
 * @Date: 2023-02-26 12:12:29
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 12:17:18
 * @FilePath: /lx_baseReact/src/LxReact/isFunctionComponent.js
 * @description: 判断是函数组件还是class类组件
 */

import isFunction from "./isFunction";

export default function isFunctionComponent(virtualDOM) {
  const { type } = virtualDOM;
  return (
    type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
  );
}
