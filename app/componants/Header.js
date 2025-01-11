"use client";

import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          <a href="#">Hydrojan</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            Contact
          </a>
        </nav>

        {/* Theme Toggle Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="block md:hidden p-2 text-gray-700 dark:text-gray-300"
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
