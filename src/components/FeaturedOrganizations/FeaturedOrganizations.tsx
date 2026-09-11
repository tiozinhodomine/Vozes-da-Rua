import { organizations } from "../../data/organizations";

import OrganizationCard from "../OrganizationCard/OrganizationCard";

export default function FeaturedOrganizations() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {}
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Organizações em destaque
        </h2>

        {}
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          Conheça algumas organizações cadastradas na Vozes e descubra como você
          pode contribuir para transformar vidas.
        </p>

        {}
        <div className="grid grid-cols-3 gap-8 mt-16">

          {organizations.map((organization) => (
            <OrganizationCard
              key={organization.id}
              nome={organization.nome}
              cidade={organization.cidade}
              descricao={organization.descricao}
              necessidades={organization.necessidades}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
