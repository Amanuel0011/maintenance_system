"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import axios from "axios";
import { registerRequest } from "@/services/authService";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"CUSTOMER" | "WORKER">("CUSTOMER");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const data = await registerRequest(fullName.trim(), email.trim(), password, role);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      document.cookie = `token=${data.token}; Max-Age=86400; Path=/; SameSite=Lax`;
      if (data.role === "WORKER") {
        router.push("/dashboard/worker/build-profile");
        return;
      }
      router.push(`/dashboard/${data.role.toLowerCase()}`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const apiError = err.response?.data?.error;
        setError(apiError ?? "Registration failed. Please check your inputs and try again.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto mt-16 max-w-md rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h1 className="text-2xl font-semibold">Register</h1>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <input className="w-full rounded-md border p-2" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input className="w-full rounded-md border p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-md border p-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select className="w-full rounded-md border p-2" value={role} onChange={(e) => setRole(e.target.value as "CUSTOMER" | "WORKER")}>
          <option value="CUSTOMER">Customer</option>
          <option value="WORKER">Worker</option>
        </select>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="w-full rounded-md bg-slate-900 py-2 text-white disabled:opacity-60" disabled={submitting} type="submit">
          {submitting ? "Creating account..." : "Create account"}
        </button>
      </form>
    </main>
  );
}
