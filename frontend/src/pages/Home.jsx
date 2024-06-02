import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import axios from "axios";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://mern-blog-app-one.vercel.app/api/post/getposts",
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      if (res.status === 200 || res.status === 201) {
        setPosts(data.posts);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">WelCome to my BLog</h1>
        <p className="text-gray-500 text-xs sm:text-sm py-6">
          If you’ve ever read a blog post, you’ve consumed content from a
          thought leader that is an expert in their industry. Chances are if the
          blog post was written effectively, you came away with helpful
          knowledge and a positive opinion about the writer or brand that
          produced the content.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-800">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
