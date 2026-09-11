import logo from "../../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex items-center justify-center gap-3">
          <img
            src={logo}
            alt="Logo da Vozes"
            className="w-12 h-12"
          />

          <h2 className="text-3xl font-bold">
            Vozes da Rua
          </h2>
        </div>

        <p className="text-green-100 mt-2 text-center">
          Conectando vozes à ação.
        </p>

        <div className="border-t border-green-500 my-8"></div>

        <div className="flex justify-center gap-10 text-green-100">
          <a href="#" className="hover:text-white">
            Home
          </a>

          <a href="#" className="hover:text-white">
            Organizações
          </a>

          <a href="#" className="hover:text-white">
            Quero ajudar
          </a>

          <a href="#" className="hover:text-white">
            Sobre
          </a>
        </div>

        <div className="border-t border-green-500 my-8"></div>

        <p className="text-center text-green-200 text-sm">
          © 2026 Vozes da Rua • Senac Distrito Criativo.
        </p>

        <p className="text-center text-green-300 text-sm mt-2">
          Desenvolvido por Andrei Lacerda • Leonardo Vilella • Lorenzo Lima • Vitória Caroline
        </p>

      </div>
    </footer>
  );
}