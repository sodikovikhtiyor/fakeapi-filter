import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Electronics from "./Electronics";
import All from "./All";
import Jeweleray from "./Jeweleray";
import Men from "./Men";
import Women from "./Women";

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route index path="/" element={<All />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewelery" element={<Jeweleray />} />
        <Route path="/men" element={<Men />} />
      </Routes>
    </div>
  );
}

export default App;
