import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Briel OS",
  description:
    "Clear Signal Design — quiet systems for decisive people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="app-shell">
          {children}
        </div>
      </body>
    </html>
  );
}
