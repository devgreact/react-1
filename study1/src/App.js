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
