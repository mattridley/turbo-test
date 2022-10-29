import Link from "next/link";

export default async function AuthenticatedPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row">
      <nav className="py-3 px-6 shadow full-rounded">
        <ol className="flex flex-col">
          <li>
            <Link href="/account" className="underline">
              Account Details
            </Link>
          </li>
          <li>
            <Link href="/account/usage/electricity" className="underline">
              Electricity Usage
            </Link>
          </li>
          <li>
            <Link href="/account/usage/gas" className="underline">
              Gas Usage
            </Link>
          </li>
        </ol>
      </nav>
      <article className="px-6">{children}</article>
    </section>
  );
}
