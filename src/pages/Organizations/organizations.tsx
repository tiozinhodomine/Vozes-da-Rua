import Navbar from "../../components/Navbar/Navbar";
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import Footer from "../../components/Footer/Footer";
import { organizations } from "../../data/organizations";

export default function Organizations() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-8">

          <section className="text-center">
            <h1 className="text-5xl font-bold text-slate-900">
              Organizações
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Encontre organizações e descubra diferentes formas de ajudar
              pessoas em situação de rua.
            </p>
          </section>

          <section className="mt-16">
            <div className="flex h-80 items-center justify-center rounded-2xl bg-slate-200">
              <p className="text-lg text-slate-500">
                Mapa das organizações
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Organizações cadastradas
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {organizations.map((organization) => (
                <OrganizationCard
                  key={organization.id}
                  id={organization.id}
                  nome={organization.nome}
                  cidade={organization.cidade}
                  descricao={organization.descricao}
                  necessidades={organization.necessidades}
                />
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}