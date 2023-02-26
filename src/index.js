import LxReact from "./LxReact";
const root = document.getElementById("root");

// const virtualDOM = (
//   <div>
//     <h1>你好 Lsq React</h1>
//     <h2 data-test="test">(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(观察: 这个将会被改变)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <button onClick={() => alert("你好")}>点击我</button>
//     <h3>这个将会被删除</h3>
//     2, 3
//     <input type="text" value="13" />
//   </div>
// );

// LxReact.render(virtualDOM, root);

// const modifyDOM = (
//   <div className="container">
//     <h1>你好 Lx React</h1>
//     <h2 data-test="test123">(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(观察: 这个将会被改变)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <input type="text" value="1" />
//   </div>
// );

// setTimeout(() => {
//   LxReact.render(modifyDOM, root);
// }, 2000);

// function Demo() {
//   return <div>Hello1</div>;
// }

// function Heart() {
//   return <Demo />;
// }

// LxReact.render(<Heart title="Hello React" />, root);

class Alert extends LxReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Default Title",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ title: "Changed Title" });
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
        <div>
          {this.state.title}
          <button onClick={this.handleClick}>改变Title</button>
        </div>
      </div>
    );
  }
}

LxReact.render(<Alert name="张三" age={20} />, root);

// // setTimeout(() => {
// //     LxReact.render(<Alert name="李四" age={50} />, root)
// //     // LxReact.render(<Heart title="我是Heart组件" />, root)
// // }, 2000)

// class DemoRef extends LxReact.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     // console.log(this.input.value)
//     console.log(this.input.value);
//     console.log(this.alert);
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }
//   render() {
//     return (
//       <div className="container">
//         <input type="text" ref={(input) => (this.input = input)} />
//         <button onClick={this.handleClick}>按钮</button>
//         <Alert ref={(alert) => (this.alert = alert)} name="张三" age={20} />
//       </div>
//     );
//   }
// }

// // LxReact.render(<DemoRef />, root)

// class KeyDemo extends LxReact.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         {
//           id: 1,
//           name: "张三",
//         },
//         {
//           id: 2,
//           name: "李四",
//         },
//         {
//           id: 3,
//           name: "王五",
//         },
//         {
//           id: 4,
//           name: "赵六",
//         },
//       ],
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     const newState = JSON.parse(JSON.stringify(this.state));
//     newState.persons.push(newState.persons.shift());
//     // newState.persons.splice(1, 0, { id: Math.random(), name: "李逵" })
//     // newState.persons.pop()
//     this.setState(newState);
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.persons.map((person) => (
//             <li key={person.id}>{person.name}</li>
//           ))}
//         </ul>
//         <button onClick={this.handleClick}>按钮</button>
//       </div>
//     );
//   }
// }
// LxReact.render(<KeyDemo />, root);
