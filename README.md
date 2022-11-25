#REACT 1.

## 1. 개발환경 설정

### 1.1. Node.js 환경설정

[Node.js](https://nodejs.org/ko/ "Node.js 설치")
`node.js` 버전은 최신버전으로 진행합니다.

```html
PS D:\student\정화섭\react-1> node -v v18.12.1
```

### 1.2. CRA 프로젝트 생성

```html
npm uninstall -g create-react-app (리액트 앱 제거) 
npm install -g create-react-app (리액트 앱 재설치)
```

```html
npx create-react-app study1 (리액트 앱 실행) 
cd study1
```

```html
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```

```html
npm start
```

### 1.3. React 17버전 다운그레이드 설치

```html
npm i react@17 react-dom@17 --save

"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },

```

i는 install의 약자이며 --save를 입력하면 package.json에 기록이 남으며 설치가 완료된다.

### 1.4. package.json 정리

```html
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```

### 1.5. React router 5버전 다운그레이드 설치

```html
npm i react-router-dom@5 --save

 "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.4",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },

```

### 1.6. React scss 설치

```html
npm i sass --save

  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.4",
    "react-scripts": "5.0.1",
    "sass": "^1.56.1",
  },
  
```

### 1.7. 파일정리

```html
index.html 정리

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
 
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
```js
App.js

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;  
```
```js
index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
### 1.7. 파일정리

```html
setting.json 추가
가상돔 HTML 자동 완성 지원

"emmet.includeLanguages": { "javascript": "javascriptreact" }
```

### 1.8. ES7+ React/Redux/React-Native snippets 설치