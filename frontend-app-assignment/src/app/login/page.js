"use client";
import { useState } from "react";
import { login } from "../../../firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    if (!agreeTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }
    try {
      const result = await login(email, password);
      localStorage.setItem("token", result.idToken);
      router.push("/posts");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="bg-black px-5 py-2 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={60} height={60} priority />
        </Link>
      </div>
      <div className="flex items-center justify-between px-5 bg-black text-white min-h-screen">
        <div className="flex-shrink-0">
          <Image
            src="/securityIMG.png"
            alt="security"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="flex flex-col items-center bg-gray-900 text-white py-4 px-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6">Log In</h1>
          <form onSubmit={handleLogin} className="w-80 space-y-4 text-black">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="text-white"
              />
              <label htmlFor="agreeTerms" className="text-gray-300">
                I agree to the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-green-600 text-white rounded"
            >
              Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
