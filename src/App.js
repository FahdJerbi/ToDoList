import AddTask from "./components/Addtask";
import ListTask from "./components/ListTask";
import "./styles.css";
import "../src/components/style.css";

export default function App() {
  return (
    <div className="App task-app">
      <h1>To Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}
