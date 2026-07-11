import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { doSignOut } from "@/app/actions";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-sky-100">
      <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-slate-100">
        <div className="font-bold text-slate-900 text-lg">
          <span className="text-sky-600">Saas</span>Agenda
        </div>
        <form action={doSignOut}>
          <button className="text-sm text-slate-500 hover:text-slate-800">Cerrar sesión</button>
        </form>
      </header>

      <section className="max-w-3xl mx-auto px-8 py-20 text-center">
        <div className="text-6xl">🎉</div>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          ¡Estás dentro!
        </h1>
        <p className="mt-3 text-lg text-slate-500">
          Sesión iniciada como{" "}
          <span className="font-semibold text-slate-800">{session.user?.email}</span>
        </p>
        <div className="mt-8 inline-block rounded-xl bg-white border border-slate-100 shadow px-6 py-4 text-left">
          <p className="text-sm text-slate-400">Esta página está protegida.</p>
          <p className="text-slate-700">Sin iniciar sesión, te redirige al login. 🔒</p>
        </div>
      </section>
    </main>
  );
}
