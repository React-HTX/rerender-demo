"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css"; // Optional, include if you have global styles

const navItems = [
  { name: "Home", href: "/" },
  { name: "One Render", href: "/one-render" },
  { name: "State Render", href: "/state-render" },
  { name: "After Render", href: "/after-render" },
  { name: "Infinite Loop", href: "/infinite-loop" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white min-h-screen flex flex-col">
        <nav className="bg-zinc-800 px-6 py-4 shadow-md border-b border-zinc-700">
          <div className="w-full max-w-5xl flex gap-4 mx-auto px-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors font-medium px-3 py-2 rounded ${
                    isActive
                      ? "bg-zinc-700 text-white"
                      : "text-gray-300 hover:text-white hover:bg-zinc-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        <main className="pt-6 bg-zinc-900">{children}</main>
      </body>
    </html>
  );
}
