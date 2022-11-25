#REACT 1.

## 2. JSX 의 이해

객체 형태의 가상돔을 리턴하는 역할

### 2.1. React 복수개의 요소 반환 방법

```html
1. div로 감싸기

2. 프래그먼트 사용하기
: 불필요한 부모태그 생성을 막기 위해서는 <></> (fragment)로 감싸준다.
: 아래는 udemy 강의에서 추가적으로 알려준 방법이다.
: react를 import 해왔을 경우에는 <React.Fragment></React.Fragment> 로 작성할 수도 있다.
: 프로젝트 세팅에 따라 프래그먼트를 다르게 사용한다
```

```js
App.js;

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ul className="list">
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
        <li>list5</li>
      </ul>
    </div>
  );
}

export default App;
```

### 2.2. 한개의 파일에서 여러 컴포넌트를 export 하는 방법

```js
Layout.js;

function Header() {
  return (
    <header>
      <div>Header</div>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div>Footer</div>
    </footer>
  );
}
function Popup() {
  return (
    <header>
      <div>Popup</div>
    </header>
  );
}

export { Header, Footer, Popup };
```

```js
App.js;

import { Header, Footer } from "./Layout";

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
```
