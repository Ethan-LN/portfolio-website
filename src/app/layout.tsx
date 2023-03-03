"use client";
import Header from "@/Components/Header";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en" className="dark">
    <html
      lang="en"
      className="dark snap-y snap-mandatory overflow-scroll scroll-smooth z-0 m-0 p-0 scrollbar-thumb-fuchsia-300 scrollbar-track-neutral-200 dark:scrollbar-track-gray-700 scrollbar-corner-fuchsia-400 scrollbar-rounded-md scrollbar"
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-neutral-100 dark:bg-slate-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
