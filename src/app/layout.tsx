import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <header className="w-full flex justify-center items-center h-24">
          <Link className="font-semibold text-xl" href="/">
            Home page
          </Link>
        </header>
        <div className="h-screen p-16">{children}</div>
      </body>
    </html>
  );
}
