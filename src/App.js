import { lazy } from "react";
import "./App.css";
const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
