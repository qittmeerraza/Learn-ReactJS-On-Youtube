import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header w-25">
        <div className="input-group mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here                                   "
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-warning"
            type="button"
            id="button-addon2"
          >
            Add Todo
          </button>
        </div>
      </header>
      <div className="w-25 mt-4">
        <ul className="list-group mt-2">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Text
            <div>
              <button className="btn btn-warning mx-1">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
      This Todo App Created By Qitmeer Raza
      </div>
    </div>
  );
}

export default App;
