"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast.success("Successfully logged out");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white py-3">
      <div className="flex items-center p-5 justify-between">
        <Link href="/posts">
          <Image src="/logo.png" alt="logo" width={60} height={60} priority />
        </Link>

        <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 transition-all"
        >
          Logout
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Posts</h1>

      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="block">
              <div className="p-6 rounded-lg border border-gray-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-100 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-300">
                  {post.body.substring(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsPage;
