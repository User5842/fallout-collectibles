import type { Metadata } from "next";
import "./globals.css";
import { VT323 } from "next/font/google";
import Link from "next/link";

const vt323 = VT323({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

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
    <html lang="en" className={vt323.className}>
      <body className="antialiased min-h-screen flex flex-col">
        <main className="container mx-auto p-4 flex-1">
          <div className="flex flex-col justify-between items-center lg:flex-row space-y-4 sm:space-y-0">
            <header className="text-center">
              <Link href="/fallout-3">
                <h1 className="font-bold text-4xl">Fallout Collectibles</h1>
              </Link>
            </header>
            <nav className="m-0">
              <ul className="flex gap-8">
                <li className="text-center">
                  <Link href="/fallout-3">Fallout 3</Link>
                </li>
                <li className="text-center">
                  <Link href="/fallout-new-vegas">Fallout: New Vegas</Link>
                </li>
                <li className="text-center">
                  <Link href="/fallout-4">Fallout 4</Link>
                </li>
              </ul>
            </nav>
          </div>
          <hr className="my-4 " />
          {children}
        </main>
        <footer>
          <p className="text-[#ffd52c] p-2 text-center">
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
