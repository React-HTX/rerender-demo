"use client";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";

import fallbackData from "../../../blogData.json";

type Paragraph = string | { blockquote: string };
type Post = {
  userId: number;
  id: number;
  title: string;
  body: Paragraph[];
};

export default function OneRender() {
  const post: Post = fallbackData[0];
  const imageUrl = `https://picsum.photos/800/400?random=${post.id}`;

  console.log("🌀 OneRender page mounted");

  return (
    <div className="bg-zinc-900 p-6">
      <div className="flex max-w-5xl mx-auto">
        {/* Table of Contents */}
        <aside className="relative mt-6 self-start w-64 h-screen overflow-y-auto">
          <div className="sticky top-0 px-4 py-6 bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-zinc-700 p-6 rounded-lg shadow shadow-gray-600 mx-4">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-gray-100">
              Table of Contents
            </h2>
            <ul className="space-y-2">
              <li>
                <span className="w-full text-left text-gray-100 px-2 py-1 rounded">
                  {post.title}
                </span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 mt-6 flex justify-center overflow-y-auto">
          <div className="max-w-2xl w-full p-6 rounded-lg shadow shadow-gray-600 bg-white dark:bg-zinc-800 mx-4 flex flex-col justify-between">
            <img
              src={imageUrl}
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
              <OutlineHeart className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
