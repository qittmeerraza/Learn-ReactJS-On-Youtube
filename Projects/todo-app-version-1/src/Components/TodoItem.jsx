export default function TodoItem() {
  return (
    <div className="w-25 mt-4">
      <ul className="list-group mt-2">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Text
          <div>
            <button className="btn btn-warning mx-1 editBtn">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
