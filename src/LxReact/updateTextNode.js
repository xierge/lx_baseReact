/*
 * @Date: 2023-02-25 22:52:54
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 22:56:36
 * @FilePath: /lx_baseReact/src/LxReact/updateTextNode.js
 * @description:
 */
export default function updateTextNode(oldDOM, virtualDOM, oldVirtualDOM) {
  let newValue = virtualDOM.props.textContent;
  let oldValue = oldVirtualDOM.props.textContent;
  if (newValue !== oldValue) {
    oldDOM.textContent = virtualDOM.props.textContent;
    oldDOM._virtualDOM = virtualDOM;
  }
}
