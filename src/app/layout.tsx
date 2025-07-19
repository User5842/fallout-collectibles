import type { Metadata } from "next";
import "./globals.css";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata: Metadata = {
  description: "Track every collectible you find across the Fallout universe",
  title: "Fallout Collectibles",
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
          <header className="flex items-center justify-between">
            <Link href="/">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">
                  Fallout Collectibles
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Track every collectible you find across the Fallout universe
                </p>
              </div>
            </Link>
            <Button variant="outline">Log In</Button>
          </header>
          <Separator className="my-4" />
          {children}
          <footer className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
            <p>
              Collectible data sourced from{" "}
              <a
                href="https://fallout.fandom.com/wiki/Fallout_Wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700"
              >
                Fallout Wiki
              </a>{" "}
              and licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700"
              >
                CC BY-SA 3.0
              </a>
              .
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
