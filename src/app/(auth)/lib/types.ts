export interface User {
  id: string;
  email: string;
  username: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
  name?: string;
}

export interface AuthResponse {
  user: User;
  token?: string; // We'll use cookie instead, but keep for API consistency
}

export type AuthError = {
  message: string;
  field?: string;
};