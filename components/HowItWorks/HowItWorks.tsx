import InfoCard from "../InfoCard/InfoCard";

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">

      {}
      <div className="max-w-7xl mx-auto px-8">

        {}
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Como funciona
        </h2>

        {}
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          A Vozes da Rua conecta pessoas que desejam ajudar às organizações
          sociais de forma simples, rápida e transparente.
        </p>

        {}
        <div className="mt-16 grid grid-cols-3 gap-8">

          <InfoCard
            numero="01"
            titulo="Encontre uma ONG"
            descricao="Pesquise organizações sociais cadastradas e conheça seu trabalho."
          />

          <InfoCard
            numero="02"
            titulo="Veja as necessidades"
            descricao="Descubra quais doações ou voluntários são necessários."
          />

          <InfoCard
            numero="03"
            titulo="Faça a diferença"
            descricao="Entre em contato com a organização e contribua da forma que puder."
          />

        </div>

      </div>

    </section>
  );
}