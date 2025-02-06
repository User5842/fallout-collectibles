import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fallout Collectibles",
  description:
    "Keep track of collectibles across Fallout 3, Fallout: New Vegas, and Fallout 4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <main className="container mx-auto p-4 flex-1">
          <div className="flex flex-col justify-between items-center sm:flex-row space-y-4">
            <header className="text-center">
              <Link href="/fallout-3">
                <h1 className="font-bold text-2xl">Fallout Collectibles</h1>
              </Link>
            </header>
            <nav>
              <ul className="flex gap-8">
                <li>
                  <Link href="/fallout-3">Fallout 3</Link>
                </li>
                <li>
                  <Link href="/fallout-new-vegas">Fallout: New Vegas</Link>
                </li>
                <li>
                  <Link href="/fallout-4">Fallout 4</Link>
                </li>
              </ul>
            </nav>
          </div>
          <hr className="my-4 " />
          {children}
        </main>
        <footer className="bg-slate-100">
          <p className="text-black p-2 text-center">
            Content courtesy of{" "}
            <a
              className="text-blue-500"
              href="https://fallout.fandom.com/wiki/Fallout_Wiki"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nukapedia
            </a>{" "}
            | Licensed under CC-BY-SA
          </p>
        </footer>
      </body>
    </html>
  );
}
