"use client";

import './globals.css';
import { ThemeProvider } from './componants/ThemeProvider';
import Header from './componants/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header/>
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
