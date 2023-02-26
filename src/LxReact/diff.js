/*
 * @Date: 2023-02-25 10:53:53
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 23:32:42
 * @FilePath: /lx_baseReact/src/LxReact/diff.js
 * @description:  diff函数
 */
import createDOM from "./createDOM";
import mountElement from "./mountElement";
import unmountNode from "./unmountNode";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode";
export default function diff(virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
  // 判断是否是第一次
  if (!oldDOM) {
    mountElement(virtualDOM, container);
    // 判断节点类型是否相同
  } else if (virtualDOM.type !== oldVirtualDOM.type) {
    const newElement = createDOM(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
    // 节点类型相同
  } else if (virtualDOM.type === oldVirtualDOM.type) {
    let oldChildNodes = oldDOM.childNodes;
    if (virtualDOM.type === "text") {
      updateTextNode(oldDOM, virtualDOM, oldVirtualDOM);
    } else {
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
    }

    virtualDOM.children.forEach((child, index) => {
      diff(child, oldDOM, oldChildNodes[index]);
    });

    // 对比之后删除多余的节点
    if (oldChildNodes.length > virtualDOM.children.length) {
      console.log(oldChildNodes.length, virtualDOM.children.length);
      for (
        let i = oldChildNodes.length - 1;
        i > virtualDOM.children.length - 1;
        i--
      ) {
        console.log(i);
        unmountNode(oldChildNodes[i]);
      }
    }
  }
}
