"use client";

import "./globals.css";
import { ThemeProvider } from "./componants/ThemeProvider";
import Header from "./componants/Header"; // Import the Header component

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header /> {/* Header will be included on all pages */}
          {children} {/* Page content will be rendered here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
