"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";

export default function LogoutButton() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    document.cookie = "token=; Max-Age=0; Path=/; SameSite=Lax";
    dispatch(logout());
    router.push("/login");
  };

  return (
    <button
      className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
      onClick={handleLogout}
      type="button"
    >
      Logout
    </button>
  );
}
