import "./App.css";
import Esignature from "./components/Esignature";
import RandomizeColors from "./components/RandomizeColors/RandomizeColors";

function App() {
  return (
    <div className="App">
      <Esignature />
      <div style={{marginTop:"150px"}}>
        <RandomizeColors text={"Randomize Colors"} />
      </div>
    </div>
  );
}

export default App;
