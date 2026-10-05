import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header
      className="
        w-full
        bg-white
        shadow-sm
        sticky
        top-0
        z-50
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-8
          py-4
          flex
          items-center
          justify-between
        "
      >
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo da Vozes da Rua"
            className="w-10 h-10"
          />

          <h2 className="text-2xl font-bold text-slate-900">
            Vozes da Rua
          </h2>
        </Link>

        <ul className="flex gap-8 text-slate-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/organizacoes"
              className="hover:text-blue-600 transition"
            >
              Organizações
            </Link>
          </li>

          <li>
            <Link
              to="/sobre"
              className="hover:text-blue-600 transition"
            >
              Sobre Nós
            </Link>
          </li>
        </ul>

        <Link
          to={user ? "/perfil" : "/login"}
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-3
            rounded-xl
            font-semibold
            transition
          "
        >
          <UserRound size={19} />

          {user?.displayName || "Meu perfil"}
        </Link>
      </nav>
    </header>
  );
}