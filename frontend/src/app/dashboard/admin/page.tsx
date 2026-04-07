import LogoutButton from "@/components/auth/LogoutButton";

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <LogoutButton />
      </div>
      <p className="mt-2 text-slate-600">Approve workers, manage users/bookings/payments, and monitor analytics.</p>
    </main>
  );
}
