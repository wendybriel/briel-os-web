import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Briel OS",
  description: "Clear Signal Design — Quiet Systems for Founders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="site">
          {children}
        </main>
      </body>
    </html>
  );
}
