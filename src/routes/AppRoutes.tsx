import { Route, Routes } from "react-router";
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import { FormPage } from "../pages/FormPage/FormPage";



export default function AppRoutes() {
  return (
  <Routes>
    <Route element={<MainLayout/>}>
    <Route path="/Home"  element={<Home/>}/>
    <Route path="/sobre"  element={<About/>}/>
    <Route path="/Form"  element={<FormPage/>}/>
    </Route>
    <Route path="*" element={<Notfound/>}/>
  </Routes>
  
  
  )}