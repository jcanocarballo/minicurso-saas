export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-slate-50 to-sky-100">
      <div className="text-7xl">👋</div>
      <h1 className="text-5xl font-bold tracking-tight text-slate-900">
        Hola, SaaS
      </h1>
      <p className="text-xl text-slate-500">
        El comienzo de nuestro minicurso · J Cano
      </p>
      <span className="mt-4 rounded-full bg-sky-600 px-6 py-2 text-white font-medium">
        Next.js + TypeScript + Tailwind
      </span>
    </main>
  );
}
