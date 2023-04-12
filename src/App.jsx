import "./App.css";
import Hello from "./components/Hello/Hello";

function App() {
  const name1 = "Daniel";
  const name2 = "Adil";
  return (
    <div className="App">
      <h1>Приветствие</h1>
      <Hello name={name1} age="14" />
    </div>
  );
}

export default App;
