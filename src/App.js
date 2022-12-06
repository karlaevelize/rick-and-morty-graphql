import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CharacterDetails } from "./components/CharacterDetails";
import { Homepage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
