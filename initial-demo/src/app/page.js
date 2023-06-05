import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Estamos en Home</title>
        <meta name="description" content="Abouth Page" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <h1>
        hola que tal es pruesba Ir a{/* <a href="/about">About</a> */}
        <Link href="/dashboard">About</Link>
      </h1>
    </div>
  );
}
