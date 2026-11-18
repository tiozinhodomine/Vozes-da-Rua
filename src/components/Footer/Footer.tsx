
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="flex items-center justify-center gap-3">
          <img
            src={logo}
            alt="Logo da Vozes da Rua"
            className="h-12 w-12 object-contain"
          />

          <h2 className="text-3xl font-bold">
            Vozes da Rua
          </h2>
        </div>

        <p className="mt-2 text-center text-green-100">
          Conectando vozes à ação.
        </p>

        <div className="my-8 border-t border-green-500" />

        <nav
          aria-label="Navegação do rodapé"
          className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-green-100"
        >
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>

          <Link
            to="/organizacoes"
            className="transition hover:text-white"
          >
            Organizações
          </Link>

          <Link to="/sobre" className="transition hover:text-white">
            Sobre Nós
          </Link>
        </nav>

        <div className="my-8 border-t border-green-500" />

        <p className="text-center text-sm text-green-200">
          © 2026 Vozes da Rua • Senac Distrito Criativo.
        </p>

        <p className="mt-2 text-center text-sm text-green-300">
          Desenvolvido por Andrei Lacerda • Leonardo Vilella • Lorenzo
          Lima • Vitória Caroline
        </p>

      </div>
    </footer>
  );
}
