"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { postID } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postID}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load post data");
        setLoading(false);
      }
    };
    fetchPost();
  }, [postID]);

  return (
    <>
      <div className="bg-black px-5 py-2 flex items-center">
        <div className="flex justify-start">
          <Link href="/posts">
            <Image src="/logo.png" alt="logo" width={60} height={60} priority />
          </Link>
        </div>
      </div>

      <div className="min-h-screen bg-black py-10">
        {loading ? (
          <p className="text-center text-slate-100 font-semibold text-5xl">
            Loading...
          </p>
        ) : post ? (
          <div className="max-w-3xl mx-auto p-6 bg-slate-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              {post.title}
            </h2>
            <p className="text-slate-200 mb-6">{post.body}</p>
            <button
              onClick={() => router.push("/posts")}
              className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
            >
              Back to Posts
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-600">Post not found.</p>
        )}
      </div>
    </>
  );
};

export default PostPage;
