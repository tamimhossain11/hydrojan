"use client";

import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
          <a href="#">Hydrojan</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-lg text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200 shadow-lg transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="block md:hidden p-2 text-teal-700 dark:text-teal-300"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
