/*
 * @Date: 2023-02-25 15:27:27
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 23:15:56
 * @FilePath: /lx_baseReact/src/LxReact/updateNodeElement.js
 * @description: 更新dom的属性
 */
export default function updateNodeElement(
  newElement,
  virtualDOM,
  oldVirtualDOM = {}
) {
  const newProps = virtualDOM.props;
  const oldProps = oldVirtualDOM.props || {};
  console.log(virtualDOM, oldVirtualDOM);
  Object.keys(newProps).forEach((attrName) => {
    const newPropsValue = newProps[attrName];
    const oldPropsValue = oldProps[attrName];
    if (newPropsValue !== oldPropsValue) {
      if (attrName.startsWith("on")) {
        let eventName = attrName.toLowerCase().slice(2);
        newElement.addEventListener(eventName, newPropsValue);
      } else if (attrName === "checked" || attrName === "value") {
        newElement[attrName] = newPropsValue;
      } else if (attrName !== "children") {
        if (attrName === "class") {
          newElement.setAttribute("className", newPropsValue);
        } else {
          newElement.setAttribute(attrName, newPropsValue);
        }
      }
    }
  });

  // 根据oldProps与newProps的对比，将删除的属性移除
  Object.keys(oldProps).forEach((attrName) => {
    const newPropsValue = newProps[attrName];
    const oldPropsValue = oldProps[attrName];
    if (!newPropsValue) {
      if (attrName.startsWith("on")) {
        let eventName = attrName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (attrName !== "children") {
        newElement.removeAttribute(attrName);
      }
    }
  });
}
