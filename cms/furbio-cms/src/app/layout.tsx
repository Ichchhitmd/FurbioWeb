import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Furbio CMS",
  description: "Created by the Furbio team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
