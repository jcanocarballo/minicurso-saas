"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const justRegistered = params.get("registered") === "1";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: String(fd.get("email")),
      password: String(fd.get("password")),
      redirect: false,
    });
    if (res?.ok) router.push("/dashboard");
    else {
      setError("Correo o contraseña incorrectos");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col gap-4"
    >
      <div className="text-center mb-2">
        <div className="text-4xl">🔐</div>
        <h1 className="text-2xl font-bold text-slate-900 mt-2">Inicia sesión</h1>
        <p className="text-slate-500 text-sm">Accede a tu cuenta</p>
      </div>
      {justRegistered && (
        <p className="rounded-lg bg-emerald-50 text-emerald-700 text-sm px-3 py-2 text-center">
          ¡Cuenta creada! Ahora inicia sesión.
        </p>
      )}
      <label className="text-sm font-medium text-slate-700">
        Email
        <input name="email" type="email" required placeholder="tu@email.com"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-sky-500" />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Contraseña
        <input name="password" type="password" required placeholder="••••••••"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-sky-500" />
      </label>
      {error && <p className="text-sm text-red-600 text-center">{error}</p>}
      <button disabled={loading}
        className="mt-2 rounded-lg bg-sky-600 text-white font-medium py-2.5 hover:bg-sky-700 transition disabled:opacity-60">
        {loading ? "Entrando…" : "Iniciar sesión"}
      </button>
      <p className="text-center text-sm text-slate-500">
        ¿No tienes cuenta? <a href="/register" className="text-sky-600 font-medium">Regístrate</a>
      </p>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-sky-100">
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
