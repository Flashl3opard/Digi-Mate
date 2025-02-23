import "./App.css";
import Darkmode from "../public/components/DarkMode";
import Toggle from "../public/components/Apps";

function App() {
  return (
    <>
      <div className="absolute">
        <Darkmode />
        <Toggle />
      </div>
    </>
  );
}

export default App;
