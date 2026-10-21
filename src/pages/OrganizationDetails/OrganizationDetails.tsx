
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ExternalLink,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OrganizationFavoriteButton from "../../components/OrganizationFavoriteButton/OrganizationFavoriteButton";
import { organizations } from "../../data/organizations";

export default function OrganizationDetails() {
  const { id } = useParams();

  const organization = organizations.find(
    (item) => item.id === Number(id)
  );

  if (!organization) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[60vh] flex-col items-center justify-center bg-slate-50 px-6 text-center">
          <Building2 size={48} className="text-slate-400" />

          <h1 className="mt-5 text-3xl font-extrabold text-slate-900">
            Organização não encontrada
          </h1>

          <p className="mt-3 text-slate-500">
            Não encontramos essa organização no nosso cadastro.
          </p>

          <Link
            to="/organizacoes"
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Voltar para organizações
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const primaryPhone = organization.telefone
    .split("/")[0]
    .trim()
    .replace(/\D/g, "");

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    organization.endereco
  )}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">

          {/* Voltar para a listagem */}
          <Link
            to="/organizacoes"
            className="mb-8 inline-flex items-center gap-2 font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={19} />
            Todas as organizações
          </Link>

          {/* Capa da organização */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-56 overflow-hidden sm:h-80">

              {/* Fundo bonito caso a fotografia não carregue */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-emerald-500 text-white">
                <Building2 size={56} strokeWidth={1.4} />

                <p className="mt-4 text-lg font-semibold">
                  Vozes da Rua
                </p>

                <p className="mt-1 text-sm text-white/80">
                  Conectando solidariedade à ação
                </p>
              </div>

              <img
                src={organization.imagem}
                alt={`Imagem de ${organization.nome}`}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute right-4 top-4 rounded-xl bg-white shadow-lg">
                <OrganizationFavoriteButton
                  organizationId={organization.id}
                />
              </div>
            </div>

            {/* Nome e apresentação */}
            <div className="p-6 sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Organização social
              </span>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {organization.nome}
              </h1>

              <p className="mt-4 flex items-center gap-2 text-slate-600">
                <MapPin size={20} className="shrink-0 text-blue-600" />
                {organization.cidade}
              </p>

              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                {organization.descricao}
              </p>
            </div>
          </section>

          {/* Formas de ajudar e informações de contato */}
          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Como ajudar */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                  <HeartHandshake
                    size={26}
                    className="text-emerald-600"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-700">
                    Faça a diferença
                  </p>

                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Como ajudar
                  </h2>
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                Existem diferentes formas de contribuir. Confira as
                possibilidades abaixo e consulte a instituição para
                confirmar o que ela está recebendo atualmente.
              </p>

              <div className="mt-6 space-y-3">
                {organization.necessidades.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      ✓
                    </span>

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={organization.comoAjudarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Ver como ajudar
                <ArrowRight size={19} />
              </a>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Confirme as condições de recebimento diretamente com a
                organização antes de levar doações.
              </p>
            </section>

            {/* Contato */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div>
                <p className="text-sm font-semibold text-blue-700">
                  Fale com a instituição
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                  Contato
                </h2>

                <p className="mt-2 leading-6 text-slate-500">
                  Utilize os canais oficiais para tirar dúvidas e combinar
                  como contribuir.
                </p>
              </div>

              <div className="mt-7 space-y-6">

                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <MapPin size={21} className="text-blue-600" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900">
                      Endereço
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {organization.endereco}
                    </p>

                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Abrir no mapa
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                {organization.telefone && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Phone size={21} className="text-blue-600" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-900">
                        Telefone
                      </h3>

                      <a
                        href={`tel:${primaryPhone}`}
                        className="mt-1 inline-block text-sm leading-6 text-slate-600 transition hover:text-blue-600"
                      >
                        {organization.telefone}
                      </a>
                    </div>
                  </div>
                )}

                {/* E-mail: só aparece quando cadastrado */}
                {organization.email && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Mail size={21} className="text-blue-600" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-900">
                        E-mail
                      </h3>

                      <a
                        href={`mailto:${organization.email}`}
                        className="mt-1 block break-all text-sm text-slate-600 transition hover:text-blue-600"
                      >
                        {organization.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Site */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Globe size={21} className="text-blue-600" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900">
                      Site oficial
                    </h3>

                    <a
                      href={organization.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Visitar site
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Chamada final */}
          <section className="mt-8 rounded-3xl bg-slate-900 px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-extrabold">
                  Toda ajuda pode fazer diferença.
                </h2>

                <p className="mt-2 max-w-2xl leading-7 text-slate-300">
                  Continue conhecendo as organizações e encontre outras
                  maneiras de contribuir.
                </p>
              </div>

              <Link
                to="/organizacoes"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-600"
              >
                Ver organizações
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
