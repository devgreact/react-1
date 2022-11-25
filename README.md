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

### 2.2. React 복수개의 요소 반환 방법

```js
Header.js

import React from "react";

const Header = () => {
  return (
    <header>
      <h1>LOGO</h1>
      <a href="#">menu</a>
    </header>
  );
};

export default Header;
```

```js
Footer.js

import React from "react";

const Footer = () => {
  return (
    <header>
      <h1>Footer</h1>
    </header>
  );
};

export default Footer;
```

```js
App.js

import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;


```
