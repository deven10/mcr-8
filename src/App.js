import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Homepage } from "./Pages/Homepage";
import { SingleDetails } from "./Pages/SingleDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/single-meeting/:dataId" element={<SingleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
