"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/auth/LogoutButton";

export default function WorkerBuildProfilePage() {
  const router = useRouter();
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [experienceYears, setExperienceYears] = useState("");

  useEffect(() => {
    const profileBuilt = localStorage.getItem("workerProfileBuilt");
    if (profileBuilt === "true") {
      router.replace("/dashboard/worker");
    }
  }, [router]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with worker profile API when implemented.
    localStorage.setItem("workerProfileBuilt", "true");
    router.push("/dashboard/worker");
  };

  return (
    <main className="mx-auto max-w-3xl p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Build Worker Profile</h1>
        <LogoutButton />
      </div>

      <form className="space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-md border p-2"
          placeholder="Profession (e.g., Electrician)"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <input
          className="w-full rounded-md border p-2"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="w-full rounded-md border p-2"
          placeholder="Price Range (e.g., 500 - 1500 ETB)"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <input
          className="w-full rounded-md border p-2"
          placeholder="Years of Experience"
          value={experienceYears}
          onChange={(e) => setExperienceYears(e.target.value)}
        />
        <button className="w-full rounded-md bg-slate-900 py-2 text-white" type="submit">
          Save Profile
        </button>
      </form>
    </main>
  );
}
