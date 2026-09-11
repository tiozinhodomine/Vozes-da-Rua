import heroImage from "../../assets/images/hero/hero.png";

export default function Hero() {
  return (
    <section className="w-full bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto min-h-[85vh] flex items-center justify-between px-8">

        <div className="max-w-xl">

          <span className="text-blue-600 font-semibold">
            Plataforma Solidária
          </span>

          <h1 className="text-6xl font-bold text-slate-900 leading-tight mt-4">
            Conectando
            <br />
            solidariedade
            <br />
            à ação.
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            A Vozes da Rua aproxima pessoas que desejam ajudar de organizações
            sociais que atuam diariamente no apoio a pessoas em situação de rua.
          </p>

          <div className="flex gap-4 mt-10">

            <button
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
              "
            >
              
              Quero ajudar
            </button>

            <button
              className="
                border
                border-blue-600
                text-blue-600
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-blue-100
                transition-all
                duration-300
              "
            >
              Ver organizações
            </button>

          </div>

        </div>

        <div className="w-[500px]">

          <img
            src={heroImage}
            alt="Voluntários ajudando pessoas em situação de rua"
            className="w-full mix-blend-multiply"
          />

        </div>

      </div>
    </section>
  );
}