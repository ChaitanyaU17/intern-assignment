import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl">My App</h1>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;
