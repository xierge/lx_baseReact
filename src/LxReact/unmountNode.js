/*
 * @Date: 2023-02-25 23:20:21
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 23:33:51
 * @FilePath: /lx_baseReact/src/LxReact/unmountNode.js
 * @description:
 */
export default function unmountNode(node) {
  const virtualDOM = node._virtualDOM;
  if (virtualDOM.type === "text") {
    node.remove();
    return;
  }

  Object.keys(virtualDOM.props).forEach((attrName) => {
    if (attrName.startsWith("on")) {
      let eventName = attrName.toLowerCase(attrName).slice(2);
      node.removeEventListener(eventName, virtualDOM.props[attrName]);
    }
  });

  if (virtualDOM.children.length) {
    for (let i = 0; i < virtualDOM.children.length - 1; i++) {
      unmountNode(node.childNodes[i]);
      i--;
    }
  }

  node.remove();
}
