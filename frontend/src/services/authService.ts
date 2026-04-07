import api from "./api";

export type LoginResponse = {
  token: string;
  role: "CUSTOMER" | "WORKER" | "ADMIN";
  fullName: string;
};

export const loginRequest = async (email: string, password: string) => {
  const response = await api.post<LoginResponse>("/auth/login", { email, password });
  return response.data;
};

export const registerRequest = async (
  fullName: string,
  email: string,
  password: string,
  role: "CUSTOMER" | "WORKER"
) => {
  const response = await api.post<LoginResponse>("/auth/register", {
    fullName,
    email,
    password,
    role,
  });
  return response.data;
};
