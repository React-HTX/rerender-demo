"use client";

import { useState, useEffect } from "react";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import fallbackData from "../../../blogData.json";

type Paragraph = string | { blockquote: string };

type Post = {
  userId: number;
  id: number;
  title: string;
  body: Paragraph[];
};

export default function AfterRender() {
  const [selectedPostId, setSelectedPostId] = useState<number>(
    fallbackData[0].id
  );
  const [post, setPost] = useState<Post>(fallbackData[0]);
  const [liked, setLiked] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  console.log("🌀 BlogPosts rendered | selectedPostId:", selectedPostId);

  // Step 1: useEffect — logs and cleanup demo only
  useEffect(() => {
    console.log("🎯 useEffect triggered");

    return () => {
      console.log("🧹 useEffect cleanup");
    };
  }, []); // empty dependency array = run once on mount

  // Step 2: useEffect to fetch a new image URL when selectedPostId changes
  useEffect(() => {
    console.log("🖼️ Fetching new image for post:", selectedPostId);

    // Simulate an image fetch
    const newImage = `https://picsum.photos/800/400?random=${selectedPostId}`;
    setImageUrl(newImage);
  }, [selectedPostId]); // re-run ONLY when post ID changes

  // Step 3: useEffect to update post when selectedPostId changes

  return (
    <div className="bg-zinc-900">
      <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
        {/* Main Content */}
        <main className="w-full md:w-[70%] flex justify-center">
          <div className="max-w-2xl w-full p-6 rounded-lg shadow shadow-gray-600 bg-white dark:bg-zinc-800 mx-4 flex flex-col justify-between">
            <img
              src={imageUrl ?? undefined}
              alt={`Header image for ${post.title}`}
              className="w-full h-64 object-cover rounded-md mb-6"
              loading="lazy"
            />

            <div className="prose prose-neutral dark:prose-invert max-w-none mb-4">
              <h2 className="text-2xl font-semibold text-gray-100">
                {post.title}
              </h2>
              {post.body.map((para, idx) =>
                typeof para === "string" ? (
                  <p key={idx}>{para}</p>
                ) : (
                  <blockquote className="text-4xl" key={idx}>
                    {para.blockquote}
                  </blockquote>
                )
              )}
            </div>

            <div className="flex items-center justify-between mt-auto">
              <h1 className="text-xl font-bold text-gray-100">
                By: Paul Barrón Cowritten by: ChatGPT
              </h1>
              <button
                onClick={() => setLiked((prev) => !prev)}
                className="text-red-500 hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                {liked ? (
                  <SolidHeart className="w-6 h-6" />
                ) : (
                  <OutlineHeart className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </main>
        {/* Table of Contents */}
        <aside className="w-full md:w-[30%] h-screen">
          <div className="sticky top-0 px-4 py-6 bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-zinc-700 p-6 rounded-lg shadow shadow-gray-600 mx-4 ">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-gray-100">
              Table of Contents
            </h2>
            <ul className="space-y-2">
              {fallbackData.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setSelectedPostId(item.id)}
                    className={`w-full text-left text-gray-100 px-2 py-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer ${
                      item.id === selectedPostId ? "font-bold underline" : ""
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
