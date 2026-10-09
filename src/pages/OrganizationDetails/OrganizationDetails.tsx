import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { organizations } from "../../data/organizations";

export default function OrganizationDetails() {
  const { id } = useParams();

  const organization = organizations.find(
    (organization) => organization.id === Number(id)
  );

  if (!organization) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Organização não encontrada
            </h1>

            <Link
              to="/organizacoes"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Voltar para organizações
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-8">

          <Link
            to="/organizacoes"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Voltar para organizações
          </Link>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-8">

            <div className="h-80 bg-slate-200 flex items-center justify-center">
              <span className="text-slate-500 text-lg">
                Imagem da organização
              </span>
            </div>

            <div className="p-8">

              <h1 className="text-4xl font-bold text-slate-900">
                {organization.nome}
              </h1>

              <p className="text-blue-600 mt-2 text-lg">
                📍 {organization.cidade}
              </p>

              <p className="mt-8 text-slate-600 text-lg leading-relaxed">
                {organization.descricao}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10">
                Como você pode ajudar
              </h2>

              <div className="flex flex-wrap gap-3 mt-5">
                {organization.necessidades.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}