import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn", "Work"]} />
    </div>
  );
}

export default App;
