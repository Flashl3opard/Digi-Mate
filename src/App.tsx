import "./App.css";

import Navbar from "../public/components/Navbar";
import Switch from "../public/components/Switch";
import Leetcode from "../public/components/Leetcode";
function App() {
  return (
    <>
      <div className="App">
        <h1>React Background Toggle 🌅</h1>
        <Switch />
      </div>

      <Navbar />
      <div className="">
        <Leetcode />
      </div>
    </>
  );
}

export default App;
