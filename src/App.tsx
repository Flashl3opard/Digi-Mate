import "./App.css";

import Navbar from "../public/components/Navbar";
import Switch from "../public/components/Switch";
function App() {
  return (
    <>
      <div className="App">
        <h1>React Background Toggle 🌅</h1>
        <Switch />
      </div>

      <Navbar />
    </>
  );
}

export default App;
