import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>LOGIN</h1>
      <Link href="/auth">Login</Link>
    </>
  );
}
