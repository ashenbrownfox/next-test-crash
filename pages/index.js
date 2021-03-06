import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Create Next App</title>
        <meta name="description" content="web dev programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to next</h1>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
