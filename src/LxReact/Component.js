import diff from "./diff";

/*
 * @Date: 2023-02-25 10:47:00
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 15:50:51
 * @FilePath: /lx_baseReact/src/LxReact/Component.js
 * @description: Component类
 */
export default class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    // 修改实例的state
    this.state = Object.assign({}, this.state, state);
    // 获取virtualDOM
    let virtualDOM = this.render();
    console.log(this);
    let oldDOM = this.getDOM();
    let container = oldDOM.parentNode;
    diff(virtualDOM, container, oldDOM);
  }

  setDOM(dom) {
    this._dom = dom;
  }

  getDOM() {
    return this._dom;
  }
}
