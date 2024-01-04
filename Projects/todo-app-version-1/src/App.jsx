import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import TodoItem from "./Components/TodoItem";

function App() {
  return (
    <div className="App">
      <header className="App-header w-25">
        <AppName />
        <AddTodo />
      </header>
      <TodoItem />
      <Footer />
    </div>
  );
}

export default App;
