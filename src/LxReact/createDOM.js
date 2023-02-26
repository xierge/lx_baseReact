import mountElement from "./mountElement";

/*
 * @Date: 2023-02-25 15:02:47
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 22:47:51
 * @FilePath: /lx_baseReact/src/LxReact/createDOM.js
 * @description:
 */
import updateNodeElement from "./updateNodeElement";
export default function createDOM(virtualDOM) {
  let newElement = null;
  if (virtualDOM.type === "text") {
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    newElement = document.createElement(virtualDOM.type);
    updateNodeElement(newElement, virtualDOM);
  }
  virtualDOM.children.forEach((child) => {
    mountElement(child, newElement);
  });

  newElement._virtualDOM = virtualDOM;

  return newElement;
}
