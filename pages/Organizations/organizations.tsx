import Navbar from "../../components/Navbar/Navbar";
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import Footer from "../../components/Footer/Footer";
import { organizations } from "../../data/organizations";
import OrganizationsMap from "../../components/OrganizationsMap/OrganizationsMap";

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
  <div className="mb-6">
    <h2 className="text-3xl font-bold text-slate-900">
      Encontre organizações no mapa
    </h2>

    <p className="mt-3 text-slate-600">
      Explore as localizações e descubra como entrar em contato
      com cada organização.
    </p>
  </div>

  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <OrganizationsMap />
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
                  imagem={organization.imagem}
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