import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      navigate("/perfil");
    } catch (error: any) {
      console.error("ERRO AO CRIAR CONTA:", error);

      setError(`Erro: ${error.code || "desconhecido"}`);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Criar conta
        </h1>

        <p className="mt-2 text-slate-500">
          Crie sua conta na Vozes da Rua.
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Nome
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Seu nome"
            />
          </div>

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

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Confirmar senha
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
            Criar conta
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Já possui uma conta?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}