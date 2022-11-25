#REACT 1.

## 3. 이벤트 연결하는 법

객체 형태의 가상돔을 리턴하는 역할

### 3.1. JSX 이벤트

camelCase 로 이벤트명 설정

가상돔 요소에서 연산이 필요한 부분은 { } 로 감싸줘야하기
때문에 이벤트 부분을 중괄호로 감싸준다.

중괄호로 감싸 준 곳 안에 익명하수로 등록할 함수를 작성한다.

이벤트는 하나의 가상돔 요소에 복수 개의 이벤트를 연결할 수 있다.

```js
function App() {
  return (
    <div className="App">
      {/* 하나의 가상돔 요소에 복수개의 이벤트 연결 가능 */}
      <h1
        onMouseEnter={() => {
          console.log("mouseenter");
        }}
        onMouseLeave={() => {
          console.log("mouseleave");
        }}
      >
        Title
      </h1>
    </div>
  );
}

export default App;
```

```js
App.js;

function App() {
  return (
    <div className="App">
      {/* 하나의 가상돔 요소에 복수개의 이벤트 연결 가능 */}
      <h1
        onMouseEnter={() => console.log("mouseenter")}
        onMouseLeave={() => console.log("mouseleave")}
      >
        Title
      </h1>
    </div>
  );
}

export default App;
```

```js
function App() {
  const handleClick = () => {
    alert("click2");
  };
  const handleArg = (txt) => {
    alert(txt);
  };
  return (
    <div className="App">
      <button onClick={() => alert("click")}>버튼1</button>
      {/* 미리 선언된 함수를 대입해서 호출 */}
      <button onClick={handleClick}>버튼2</button>
      <button onClick={() => handleArg("hello")}>버튼3</button>
    </div>
  );
}

export default App;
```
