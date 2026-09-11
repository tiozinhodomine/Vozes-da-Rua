import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import leonardo from "../../assets/images/team/leonardo.png";
import lorenzo from "../../assets/images/team/lorenzo.png";
import vitoria from "../../assets/images/team/vitoria.png";
import andrei from "../../assets/images/team/andrei.png";

export default function About() {
  const team = [
    {
      name: "Leonardo Vilella",
      role: "Desenvolvimento, pesquisa e criação do projeto",
      photo: leonardo,
    },
    {
      name: "Lorenzo Lima",
      role: "Pesquisa e design",
      photo: lorenzo,
    },
    {
      name: "Vitória Caroline",
      role: "Pesquisa e revisão",
      photo: vitoria,
    },
    {
      name: "Andrei Lacerda",
      role: "Desenvolvimento",
      photo: andrei,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
  <Navbar />

      {}
      <section className="relative overflow-hidden">
        {}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-green-100 blur-3xl" />
        <div className="absolute -left-40 top-60 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Conheça a Vozes da Rua
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl">
                Quando a vontade de ajudar encontra{" "}
                <span className="text-green-600">o caminho certo.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A Vozes da Rua nasceu de uma pesquisa sobre a realidade das pessoas
                em situação de rua e da necessidade de uma forma mais simples de agir e ajudar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#nossa-historia"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-600"
                >
                  Conheça nossa história
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </a>

                <a
                  href="/documentos/artigo-vozes-da-rua.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm transition hover:border-green-200 hover:text-green-600"
                >
                  Ler nosso artigo
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 3h7v7" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                Por que existimos
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                As vozes já existem.
                <br />
                <span className="text-slate-400">
                  Nós queremos aproximá-la.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                A situação de rua é um problema social complexo que envolve
                falta de moradia, vulnerabilidade, acesso limitado a serviços
                e diversas outras dificuldades.
              </p>

              <p>
                Ao mesmo tempo, existem pessoas dispostas a ajudar e
                organizações que trabalham diariamente para enfrentar essa
                realidade. O problema é que muitas vezes essas duas coisas
                simplesmente não se encontram.
              </p>

              <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6 text-base font-semibold leading-7 text-green-900">
                A Vozes da Rua nasceu justamente para aproximar quem quer ajudar de
                quem já está trabalhando para fazer a diferença.
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section
        id="nossa-historia"
        className="scroll-mt-20 bg-slate-50 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Nossa história
            </span>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Da pesquisa à ação
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A Vozes da Rua começou antes mesmo de existir. Primeiro veio a
              pesquisa, depois a ideia de transformar esse conhecimento em uma
              solução.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 font-extrabold text-blue-600">
                01
              </div>

              <h3 className="mt-6 text-xl font-extrabold">
                Pesquisa
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Desenvolvemos um artigo para compreender melhor a realidade das
                pessoas em situação de rua, suas dificuldades e a falta de
                assistência.
              </p>
            </div>

            {}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 font-extrabold text-amber-600">
                02
              </div>

              <h3 className="mt-6 text-xl font-extrabold">
                O desafio
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Precisávamos transformar a pesquisa em uma solução tecnológica
                que pudesse contribuir de forma real para esse problema.
              </p>
            </div>

            {}
            <div className="relative rounded-3xl border border-green-200 bg-green-50 p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 font-extrabold text-green-600">
                03
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-green-900">
                As vozes
              </h3>

              <p className="mt-3 leading-7 text-green-800">
                Percebemos que a melhor solução seria conectar pessoas que
                querem ajudar às organizações que já atuam na área.
              </p>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="bg-slate-900 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-green-400">
                O projeto
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                O que é a Vozes da Rua?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                A Vozes da Rua é uma plataforma simples criada para conectar pessoas
                dispostas a ajudar com ONGs e OSCs que atuam em situações de
                vulnerabilidade.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                A proposta é facilitar o acesso a organizações, locais de
                assistência, campanhas e diferentes formas de contribuir.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl">📍</div>
                <h3 className="mt-4 text-lg font-bold">
                  Encontrar
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Descubra organizações e locais que oferecem auxílio.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl">🤝</div>
                <h3 className="mt-4 text-lg font-bold">
                  Conectar
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Aproxime pessoas dispostas a ajudar das organizações.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl">🎁</div>
                <h3 className="mt-4 text-lg font-bold">
                  Doar
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Facilite a descoberta de formas de realizar doações.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl">📢</div>
                <h3 className="mt-4 text-lg font-bold">
                  Divulgar
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Dê visibilidade a campanhas e iniciativas de solidariedade.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-600">
              Quem está por trás
            </span>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
              Quatro pessoas e uma ideia.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Somos estudantes do 3º ano do Ensino Médio do Senac Distrito
              Criativo, em Porto Alegre, e desenvolvemos a Vozes como uma
              proposta de solução tecnológica para um problema social.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img src={member.photo}
                 alt={`Foto de ${member.name}`}
                 className="mx-auto h-20 w-20 rounded-3xl object-cover border-4 border-blue-100"/>

                <h3 className="mt-5 font-extrabold">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {member.role}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-green-600 p-8 text-white shadow-xl sm:p-12">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-white/10" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-green-100">
                  Da pesquisa para o projeto
                </span>

                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Quer entender de onde veio a Vozes da Rua?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-green-50">
                  Antes de criarmos a plataforma, pesquisamos o problema que
                  queríamos enfrentar. Nosso artigo apresenta essa pesquisa,
                  os desafios encontrados e as reflexões que deram origem a nossa idiea.
                </p>
              </div>

              <a
                href="/documentos/artigo-vozes-da-rua.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-extrabold text-green-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Ler artigo completo
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </section>

      {}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-green-400">
            Faça parte
          </span>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            A solidariedade começa com uma ação.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Conheça as organizações, descubra como ajudar e encontre uma forma
            de transformar sua vontade em contribuição.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/organizacoes"
              className="rounded-xl bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-600"
            >
              Conhecer organizações
            </Link>

            <Link
              to="/quero-ajudar"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white transition hover:bg-white/15"
            >
              Quero ajudar
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}