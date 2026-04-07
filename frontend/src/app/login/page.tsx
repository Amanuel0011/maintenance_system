"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginRequest } from "@/services/authService";
import { setAuth } from "@/store/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("admin@maintenance.com");
  const [password, setPassword] = useState("Admin123!");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await loginRequest(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      document.cookie = `token=${data.token}; Max-Age=86400; Path=/; SameSite=Lax`;
      dispatch(setAuth({ token: data.token, role: data.role, fullName: data.fullName }));
      router.push(`/dashboard/${data.role.toLowerCase()}`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error ?? "Login failed. Please try again.");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <main className="mx-auto mt-16 max-w-md rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h1 className="text-2xl font-semibold">Login</h1>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <input className="w-full rounded-md border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-md border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="w-full rounded-md bg-slate-900 py-2 text-white" type="submit">Sign in</button>
      </form>
    </main>
  );
}
