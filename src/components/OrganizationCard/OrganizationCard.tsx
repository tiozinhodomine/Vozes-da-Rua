
import { Link } from "react-router-dom";
import OrganizationFavoriteButton from "../OrganizationFavoriteButton/OrganizationFavoriteButton";

interface OrganizationCardProps {
  id: number;
  nome: string;
  cidade: string;
  descricao: string;
  imagem: string;
  necessidades: string[];
}

export default function OrganizationCard({
  id,
  nome,
  cidade,
  descricao,
  necessidades,
  imagem,
}: OrganizationCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative flex h-48 items-center justify-center bg-slate-200">
        <img
          src={imagem}
          alt={nome}
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute right-3 top-3">
          <OrganizationFavoriteButton
            organizationId={id}
            compact
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900">
          {nome}
        </h3>

        <p className="mt-1 text-blue-600">
          📍 {cidade}
        </p>

        <p className="mt-4 text-slate-600">
          {descricao}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {necessidades.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          to={`/organizacoes/${id}`}
          className="mt-6 block w-full rounded-xl bg-blue-600 py-3 text-center text-white transition hover:bg-blue-700"
        >
          Ver Perfil
        </Link>
      </div>
    </article>
  );
}
