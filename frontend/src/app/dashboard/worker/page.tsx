import LogoutButton from "@/components/auth/LogoutButton";
import Link from "next/link";

export default function WorkerDashboardPage() {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Worker Dashboard</h1>
          <p className="mt-1 text-slate-600">Manage profile, availability, requests, earnings, and messages.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/worker/build-profile"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Edit Profile
          </Link>
          <LogoutButton />
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Today Requests", value: "6", hint: "+2 from yesterday" },
          { label: "Pending Bookings", value: "3", hint: "Need your response" },
          { label: "Monthly Earnings", value: "ETB 12,450", hint: "+14% this month" },
          { label: "Average Rating", value: "4.8", hint: "From 57 reviews" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.hint}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">Incoming Booking Requests</h2>
          <div className="mt-4 space-y-3">
            {[
              { name: "Abel T.", task: "Electrical wiring repair", time: "Today, 4:00 PM", budget: "ETB 1,200" },
              { name: "Mimi K.", task: "Kitchen sink pipe fix", time: "Tomorrow, 10:00 AM", budget: "ETB 900" },
              { name: "Yonas D.", task: "AC maintenance", time: "Tomorrow, 2:30 PM", budget: "ETB 1,500" },
            ].map((req) => (
              <div key={`${req.name}-${req.task}`} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{req.task}</p>
                  <p className="text-sm text-slate-600">{req.name} • {req.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-emerald-700">{req.budget}</span>
                  <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
                    Accept
                  </button>
                  <button className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Profile Completion</h2>
            <div className="mt-4">
              <div className="h-2 w-full rounded-full bg-slate-200">
                <div className="h-2 w-3/4 rounded-full bg-blue-600" />
              </div>
              <p className="mt-2 text-sm text-slate-600">75% completed - add certificates and portfolio to rank higher.</p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
            <div className="mt-3 grid gap-2">
              <Link href="/dashboard/worker/build-profile" className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Update Profile</Link>
              <button className="rounded-md border border-slate-300 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Set Availability</button>
              <button className="rounded-md border border-slate-300 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Upload Portfolio</button>
              <button className="rounded-md border border-slate-300 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">View Earnings</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
