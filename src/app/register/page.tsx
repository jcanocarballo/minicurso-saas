"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await registerUser(fd);
    router.push("/login?registered=1");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-sky-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col gap-4"
      >
        <div className="text-center mb-2">
          <div className="text-4xl">✍️</div>
          <h1 className="text-2xl font-bold text-slate-900 mt-2">Crea tu cuenta</h1>
          <p className="text-slate-500 text-sm">Empieza gratis en 1 minuto</p>
        </div>
        <label className="text-sm font-medium text-slate-700">
          Nombre
          <input name="name" required placeholder="Tu nombre"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-sky-500" />
        </label>
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
        <button disabled={loading}
          className="mt-2 rounded-lg bg-sky-600 text-white font-medium py-2.5 hover:bg-sky-700 transition disabled:opacity-60">
          {loading ? "Creando…" : "Crear cuenta"}
        </button>
        <p className="text-center text-sm text-slate-500">
          ¿Ya tienes cuenta? <a href="/login" className="text-sky-600 font-medium">Inicia sesión</a>
        </p>
      </form>
    </main>
  );
}
