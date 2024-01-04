function AddTodo() {
  return (
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
  )
}

export default AddTodo