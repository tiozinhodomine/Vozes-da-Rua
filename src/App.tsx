import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/sobre" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;