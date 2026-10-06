import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/perfil");
    } catch (error: unknown) {
      const firebaseError =
        typeof error === "object" && error !== null ? error : undefined;

      const code =
        firebaseError && "code" in firebaseError
          ? firebaseError.code
          : undefined;

      if (
        code === "auth/invalid-credential" ||
        code === "auth/user-not-found" ||
        code === "auth/wrong-password"
      ) {
        setError("Email ou senha incorretos.");
      } else if (code === "auth/invalid-email") {
        setError("Digite um email válido.");
      } else {
        setError("Não foi possível entrar na conta.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Entrar
        </h1>

        <p className="mt-2 text-slate-500">
          Entre na sua conta da Vozes da Rua.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="seuemail@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Senha
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Ainda não possui uma conta?{" "}
          <Link
            to="/criar-conta"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}