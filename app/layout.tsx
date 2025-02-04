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
      <body className="antialiased">
        <main className="container mx-auto p-4">
          <div className="flex flex-col justify-between items-center sm:flex-row">
            <header className="text-center">
              <h1 className="font-bold text-2xl">Fallout Collectibles</h1>
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
      </body>
    </html>
  );
}
