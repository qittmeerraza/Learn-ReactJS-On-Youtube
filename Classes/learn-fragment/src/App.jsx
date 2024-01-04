import "./App.css";

function App() {
  let healthyFoods = [
    "Broccoli",
    "Spinach",
    "Quinoa",
    "Salmon",
    "Blueberries",
    "Almonds",
  ];
  return (
    <>
      <div className="list-group">
        <h1 className="fw-bolder">Healthy Food</h1>
        <ul className="list-group">
          {healthyFoods.map((item) => {
            <li key={item} className="list-group-item">{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
