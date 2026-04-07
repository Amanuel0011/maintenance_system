import Link from "next/link";

export default function WorkersPage() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Workers</h1>
      <p className="mt-2 text-slate-600">Search and filter workers by profession, city, price, and rating.</p>
      <div className="mt-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        Starter list UI is ready. Connect this page to `/workers` API with React Query next.
      </div>
      <Link href="/bookings" className="mt-4 inline-block text-sm text-blue-700">Go to bookings</Link>
    </main>
  );
}
