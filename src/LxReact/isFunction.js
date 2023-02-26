/*
 * @Date: 2023-02-25 14:57:12
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 12:06:39
 * @FilePath: /lx_baseReact/src/LxReact/isFunction.js
 * @description: virtualDOM类型是否是function
 */
export default function isFunction(virtualDOM) {
  return virtualDOM && typeof virtualDOM.type === "function";
}
