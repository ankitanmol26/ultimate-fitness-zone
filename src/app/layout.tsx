import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultimate Fitness Zone | Gym in Isnapur, Hyderabad",
  description: "Build your ultimate self at Ultimate Fitness Zone. Premium gym in Isnapur, Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} scroll-smooth`}
    >
      <body className="bg-black text-white font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
