import type { Metadata } from "next";
import { bevietnampro } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Profile",
  description: "Shinapri De Lucania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bevietnampro.className} antialiased bg-[#20293A] 
        min-h-screen flex flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}
