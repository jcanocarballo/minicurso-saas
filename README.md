# Minicurso: Cómo se hace un SaaS desde cero — Código

Código del minicurso **"Cómo se hace un SaaS desde cero"** del canal de YouTube
**[J Cano — Descubriendo el mundo de la programación](https://www.youtube.com/@juliancanocarballo9845)**.

Construimos, paso a paso, un SaaS real con **Next.js + TypeScript + Prisma + PostgreSQL + NextAuth + Tailwind**.

## 📺 El código está organizado por episodios (tags de git)

Cada episodio tiene un tag con el estado exacto del proyecto en ese punto:

| Tag | Episodio | Qué se agregó |
|-----|----------|----------------|
| `ep01` | Arranca el proyecto | Next.js + TypeScript + Tailwind |
| `ep02` | Base de datos | Prisma + PostgreSQL, modelo `User`, migración |
| `ep03` | Autenticación | NextAuth v5 + bcrypt: registro, login, rutas protegidas |

Para ver el proyecto tal como quedó en un episodio:

```bash
git clone https://github.com/jcanocarballo/minicurso-saas.git
cd minicurso-saas
git checkout ep03   # o ep01, ep02...
```

## 🚀 Cómo correrlo en tu máquina

```bash
# 1. Instala dependencias
npm install

# 2. Configura tus variables (copia el ejemplo y edítalo)
cp .env.example .env

# 3. Levanta una base de datos PostgreSQL (o usa Docker)
docker run --name saas-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=saas_demo -p 5432:5432 -d postgres:16-alpine

# 4. Aplica las migraciones de Prisma
npx prisma migrate dev

# 5. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 🧱 Stack

- **Next.js** (App Router) + **TypeScript**
- **Prisma** + **PostgreSQL**
- **NextAuth.js v5** (Auth.js) + **bcrypt**
- **Tailwind CSS**

---

Hecho con ❤️ para el canal **J Cano**. Suscríbete para seguir el curso.
