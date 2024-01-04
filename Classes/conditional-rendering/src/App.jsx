import "./App.css";

function App() {
  // let myArr = ["Hello","World","Raza"]
  let myArr = [];
  return (
    <>
      {myArr.length === 0 && "Not Found"}
      {myArr.map(function (item) {
        return <h1 key={item}>{item}</h1>;
      })}
    </>
  );
}

export default App;
