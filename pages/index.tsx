import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import style from "./style.module.scss";

function createClassName(classNames: Array<string>) {
  return classNames.join(" ");
}

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  }, []);

  return (
    <div className={style.container}>
      <Head>
        <title>Album</title>
        <meta name="description" content="Album" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={style.main}>
        <div
          className={createClassName([
            style.main__text,
            isVisible ? style["main__text--visible"] : "",
          ])}
        >
          <p className={style.main__textContent}>
            アルバムは<Link href="/album">こちらへ</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
