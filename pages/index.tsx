import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import style from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Album</title>
        <meta name="description" content="Album" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={style.main}>
        アルバムは<Link href="/album">こちらへ</Link>
      </main>
    </div>
  );
};

export default Home;
