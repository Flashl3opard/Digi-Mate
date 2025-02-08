import "./App.css";
import Navbar from "../public/components/Navbar";
import Apps from "../public/components/Apps";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <h1>Hello</h1>
      <Apps />
    </>
  );
}

export default App;
