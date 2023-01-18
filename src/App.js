import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodos } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.todo.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map((e) => <li key={e.id}>{e.title}</li>)}
    </div>
  );
}

export default App;
