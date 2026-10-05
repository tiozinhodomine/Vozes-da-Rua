import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import { FormPage } from "../pages/FormPage/FormPage";
import Organizations from "../pages/Organizations/organizations";
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
        <Route path="/quero-ajudar" element={<FormPage />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<Register />} />

        {}
        <Route path="/Form" element={<Navigate to="/quero-ajudar" replace />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}