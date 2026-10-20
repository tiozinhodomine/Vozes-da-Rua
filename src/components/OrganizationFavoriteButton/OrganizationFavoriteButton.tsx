
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  isOrganizationFavorite,
  setOrganizationFavorite,
} from "../../services/favorites";

interface OrganizationFavoriteButtonProps {
  organizationId: number;
  compact?: boolean;
}

export default function OrganizationFavoriteButton({
  organizationId,
  compact = false,
}: OrganizationFavoriteButtonProps) {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;

    if (!user) {
      setIsFavorite(false);
      return () => {
        active = false;
      };
    }

    isOrganizationFavorite(user.uid, organizationId)
      .then((favorite) => {
        if (active) setIsFavorite(favorite);
      })
      .catch((error) => {
        console.error("Erro ao carregar favorito:", error);
      });

    return () => {
      active = false;
    };
  }, [user, organizationId]);

  async function handleToggleFavorite() {
    if (!user) {
      navigate("/login");
      return;
    }

    const nextFavorite = !isFavorite;

    setSaving(true);

    try {
      await setOrganizationFavorite(
        user.uid,
        organizationId,
        nextFavorite
      );

      setIsFavorite(nextFavorite);
    } catch (error) {
      console.error("Erro ao salvar favorito:", error);
      window.alert(
        "Não foi possível salvar o favorito. Verifique sua conexão e as regras do Firebase."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggleFavorite}
      disabled={authLoading || saving}
      aria-label={
        isFavorite
          ? "Remover dos favoritos"
          : "Adicionar aos favoritos"
      }
      title={
        isFavorite
          ? "Remover dos favoritos"
          : "Adicionar aos favoritos"
      }
      className={`rounded-xl transition disabled:opacity-50 ${
        compact
          ? "flex h-11 w-11 items-center justify-center bg-white text-2xl text-rose-600 shadow hover:bg-rose-50"
          : "px-5 py-3 font-semibold text-rose-600 hover:bg-rose-50"
      }`}
    >
      {saving
        ? "..."
        : compact
          ? isFavorite ? "♥" : "♡"
          : isFavorite ? "♥ Favoritada" : "♡ Favoritar"}
    </button>
  );
}
