import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import Organizations from "../pages/Organizations/organizations";
import OrganizationDetails from "../pages/OrganizationDetails/OrganizationDetails";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  return <Outlet />;
}

function Notfound() {
  return <h1>Página não encontrada</h1>;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />

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
    </>
  );
}