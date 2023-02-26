/*
 * @Date: 2023-02-25 10:46:38
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-25 15:04:36
 * @FilePath: /lx_baseReact/src/LxReact/createElement.js
 * @description: createElement函数生成Vnode
 */
/**
 * @description: createElement函数生成Vnode
 * @param {*} type
 * @param {*} props
 * @param {array} children
 * @return {*} Vnode
 */
export default function createElement(type, props, ...children) {
  const childElements = [].concat(...children).reduce((pre, cur) => {
    if (cur) {
      if (cur instanceof Object) {
        pre.push(cur);
      } else {
        pre.push(createElement("text", { textContent: cur }));
      }
    }
    return pre;
  }, []);

  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements,
  };
}
