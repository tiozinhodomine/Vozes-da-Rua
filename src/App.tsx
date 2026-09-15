import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import { FormPage } from "./pages/FormPage/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Home" element={<Home />} />

        <Route path="/sobre" element={<About />} />

        <Route path="/Form"  element={<FormPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;