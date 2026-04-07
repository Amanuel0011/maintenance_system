import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Trusted Home Service Marketplace
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900">
              Find Skilled Workers in Minutes
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Connect with verified electricians, plumbers, cleaners, and technicians. Book quickly,
              chat in real-time, and pay securely.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/workers" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Find Workers
              </Link>
              <Link href="/register" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100">
                Become a Worker
              </Link>
              <Link href="/login" className="rounded-lg border border-blue-300 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100">
                Login
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Popular Services</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["Electrical", "Plumbing", "Cleaning", "Painting", "Carpentry", "AC Repair"].map((service) => (
                <div key={service} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {service}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800">
              4.8/5 average rating from verified customer reviews.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
