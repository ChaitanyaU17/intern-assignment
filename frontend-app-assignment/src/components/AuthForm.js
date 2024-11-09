import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

export default function AuthForm({ mode = "login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const FIREBASE_API_KEY = "your-firebase-api-key";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      let url;
      const payload = { email, password, returnSecureToken: true };

      if (mode === "signup") {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AIzaSyA9hLC60TmqIt_sIbpAPzz5B6Ho8N9IdjI}`;
      } else {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AIzaSyA9hLC60TmqIt_sIbpAPzz5B6Ho8N9IdjI}`;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(login({ user: data.email, token: data.idToken }));
      localStorage.setItem("token", data.idToken);
      router.push("/posts");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">
        {mode === "signup" ? "Sign Up" : "Login"}
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        {mode === "signup" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
}
