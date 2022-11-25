import Footer from "./Footer";
import Header from "./Header";
import "./scss/style.scss";
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
