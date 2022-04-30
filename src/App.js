import logo from "./logo.svg";
import "./App.css";
import AllCars from "./components/AllCars/AllCars";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <div>
        <AllCars />
      </div>
    </div>
  );
}

export default App;
