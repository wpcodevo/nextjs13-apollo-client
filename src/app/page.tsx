import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/client-side">
          Use Apollo Client inside Client Side Component
        </Link>
      </p>
      <p>
        <Link href="/server-side">
          Use Apollo Client inside React Server Component (RSC)
        </Link>
      </p>
    </>
  );
}
