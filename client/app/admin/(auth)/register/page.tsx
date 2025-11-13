"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-card rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Admin Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between gap-3.5">
            <div className="w-1/2">
            <label className=" text-sm mb-1 text-foreground">first Name</label>
            <input
              type="text"
              required
              className="w-full border border-border rounded-md px-3 py-2 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            </div>
            <div className="w-1/2">
            <label className=" text-sm mb-1 text-foreground">first Name</label>
            <input
              type="text"
              required
              className="w-full border border-border rounded-md px-3 py-2 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            </div>
          </div>

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
            <label className="block text-sm mb-1 text-foreground">Phone</label>
            <input
              type="text"
              required
              className="w-full border border-border rounded-md px-3 py-2 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
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

          <div>
            <label className="block text-sm mb-1 text-foreground">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full border border-border rounded-md px-3 py-2 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-secondary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
