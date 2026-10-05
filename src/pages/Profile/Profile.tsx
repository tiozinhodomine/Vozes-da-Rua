import { useEffect, useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserRound, LogOut, Pencil } from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }

    if (user) {
      setName(user.displayName || "");
    }
  }, [user, loading, navigate]);

  async function handleSaveName() {
    if (!auth.currentUser || !name.trim()) {
      return;
    }

    await updateProfile(auth.currentUser, {
      displayName: name.trim(),
    });

    setEditing(false);
  }

  async function handleLogout() {
    await signOut(auth);
    navigate("/");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

          <aside className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">

              <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={`Foto de ${user.displayName || "usuário"}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserRound
                    size={48}
                    className="text-blue-600"
                  />
                )}
              </div>

              <h1 className="mt-5 text-2xl font-extrabold text-slate-900">
                {user.displayName || "Meu perfil"}
              </h1>

              <p className="mt-2 text-sm text-slate-500 break-all">
                {user.email}
              </p>
            </div>
          </aside>

          <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Seus dados
                </h2>

                <p className="mt-2 text-slate-500">
                  Gerencie suas informações da Vozes da Rua.
                </p>
              </div>

              <button
                onClick={() => setEditing(!editing)}
                className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
              >
                <Pencil size={18} />

                Editar
              </button>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Nome
                </p>

                {editing ? (
                  <div className="mt-2 flex gap-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <button
                      onClick={handleSaveName}
                      className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {user.displayName || "Não informado"}
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
              >
                <LogOut size={18} />

                Sair da conta
              </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}