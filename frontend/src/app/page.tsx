import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl p-8">
      <h1 className="text-4xl font-bold">Maintenance Worker Marketplace</h1>
      <p className="mt-3 text-slate-600">
        Full-stack starter with Next.js + Spring Boot JWT auth and role dashboards.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200" href="/login">Login</Link>
        <Link className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200" href="/register">Register</Link>
        <Link className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200" href="/workers">Find Workers</Link>
      </div>
    </main>
  );
}
