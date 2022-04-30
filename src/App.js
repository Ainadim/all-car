import logo from "./logo.svg";
import "./App.css";
import AllCars from "./components/AllCars/AllCars";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <AllCars />
        </div>
      </header>
    </div>
  );
}

export default App;
