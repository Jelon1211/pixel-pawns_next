import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixel Pawns: Dreams before hoes",
  description: "Dream your warrior and fight",
  keywords: "Ai, battle, warriors, game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
