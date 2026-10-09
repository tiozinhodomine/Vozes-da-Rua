import { Outlet, Route, Routes } from "react-router-dom";
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import Organizations from "../pages/Organizations/organizations";
import OrganizationDetails from "../pages/OrganizationDetails/OrganizationDetails";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function MainLayout() {
  return <Outlet />;
}

function Notfound() {
  return <h1>Página não encontrada</h1>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/organizacoes" element={<Organizations />} />
        <Route path="/organizacoes/:id" element={<OrganizationDetails />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<Register />} />
        {}      
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}