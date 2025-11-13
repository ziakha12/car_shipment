"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-card rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Customer Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-foreground">Email</label>
            <input
              type="email"
              required
              className="w-full border border-border rounded-md px-3 py-2 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-foreground">Password</label>
            <input
              type="password"
              required
              className="w-full border border-border rounded-md px-3 py-2 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/register" className="text-secondary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
