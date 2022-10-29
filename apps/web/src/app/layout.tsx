import Link from "next/link";

import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex flex-row h-12 p-2 shadow">
          <p className="flex flex-col justify-center mr-4 font-bold">
            Octowatch
          </p>
          <Link
            href="/"
            className="flex flex-col justify-center flex-none underline mr-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex flex-col justify-center flex-none underline mr-2"
          >
            About
          </Link>
          <Link
            href="/account"
            className="flex flex-col justify-center flex-none underline mr-2"
          >
            Account
          </Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
