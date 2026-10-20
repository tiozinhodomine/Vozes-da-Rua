import { useEffect, useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  LogOut,
  Pencil,
  Heart,
  ArrowRight,
  Trash2,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import { organizations } from "../../data/organizations";
import {
  getFavoriteOrganizationIds,
  setOrganizationFavorite,
} from "../../services/favorites";

export default function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [favoritesLoading, setFavoritesLoading] = useState(true);
  const [favoritesError, setFavoritesError] = useState("");
  const [removingId, setRemovingId] = useState<number | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }

    if (user) {
      setName(user.displayName || "");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      setFavoriteIds([]);
      setFavoritesLoading(false);
      return;
    }

    let active = true;

    async function loadFavorites() {
      setFavoritesLoading(true);
      setFavoritesError("");

      try {
        const ids = await getFavoriteOrganizationIds(user.uid);

        if (active) {
          setFavoriteIds(ids);
        }
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);

        if (active) {
          setFavoritesError(
            "Não foi possível carregar seus favoritos. Tente novamente."
          );
        }
      } finally {
        if (active) {
          setFavoritesLoading(false);
        }
      }
    }

    loadFavorites();

    return () => {
      active = false;
    };
  }, [user, loading]);

  async function handleSaveName() {
    if (!auth.currentUser || !name.trim()) {
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name.trim(),
      });

      setEditing(false);
    } catch (error) {
      console.error("Erro ao atualizar nome:", error);
      window.alert("Não foi possível atualizar seu nome.");
    }
  }

  async function handleLogout() {
    await signOut(auth);
    navigate("/");
  }

  
  async function handleRemoveFavorite(organizationId: number) {
    if (!user || removingId !== null) {
      return;
    }

    setRemovingId(organizationId);
    setFavoritesError("");

    try {
      await setOrganizationFavorite(
        user.uid,
        organizationId,
        false
      );

      setFavoriteIds((currentIds) =>
        currentIds.filter((id) => id !== organizationId)
      );
    } catch (error) {
      console.error("Erro ao remover favorito:", error);

      setFavoritesError(
        "Não foi possível remover esse favorito. Tente novamente."
      );
    } finally {
      setRemovingId(null);
    }
  }

  const favoriteOrganizations = organizations.filter((organization) =>
    favoriteIds.includes(organization.id)
  );

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
          {}
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
                  <UserRound size={48} className="text-blue-600" />
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

          {}
          <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Seus dados
                </h2>

                <p className="mt-2 text-slate-500">
                  Gerencie suas informações da Vozes da Rua.
                </p>
              </div>

              <button
                type="button"
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
                  <div className="mt-2 flex flex-wrap gap-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <button
                      type="button"
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
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
              >
                <LogOut size={18} />
                Sair da conta
              </button>
            </div>
          </section>
        </div>

        {}
        <section className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50">
              <Heart size={24} className="text-rose-600" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Organizações favoritas
              </h2>

              <p className="mt-1 text-slate-500">
                Organizações que você salvou para ajudar depois.
              </p>
            </div>
          </div>

          {favoritesError && (
            <p
              role="alert"
              className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700"
            >
              {favoritesError}
            </p>
          )}

          {favoritesLoading ? (
            <p className="mt-8 text-slate-500">
              Carregando seus favoritos...
            </p>
          ) : favoriteOrganizations.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-10 text-center">
              <Heart
                size={36}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 text-lg font-bold text-slate-800">
                Você ainda não tem favoritos
              </h3>

              <p className="mt-2 text-slate-500">
                Explore as organizações e salve aquelas que deseja acompanhar.
              </p>

              <Link
                to="/organizacoes"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Explorar organizações
                <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {favoriteOrganizations.map((organization) => (
                <article
                  key={organization.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 transition hover:shadow-md"
                >
                  <div className="relative h-40 bg-slate-100">
                    <img
                      src={organization.imagem}
                      alt={organization.nome}
                      className="h-full w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        handleRemoveFavorite(organization.id)
                      }
                      disabled={removingId !== null}
                      title="Remover dos favoritos"
                      aria-label={`Remover ${organization.nome} dos favoritos`}
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-600 shadow transition hover:bg-rose-50 disabled:opacity-50"
                    >
                      {removingId === organization.id ? (
                        <span className="text-xs">...</span>
                      ) : (
                        <Trash2 size={18} />
                      )}
                    </button>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900">
                      {organization.nome}
                    </h3>

                    <p className="mt-2 text-sm text-blue-600">
                      📍 {organization.cidade}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {organization.descricao}
                    </p>

                    <Link
                      to={`/organizacoes/${organization.id}`}
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Ver organização
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}