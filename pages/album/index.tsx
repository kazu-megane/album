import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import style from "./style.module.scss";

/**
 * TODO: react-pageflipでISSUEが切られていたのでそれが解決されるまでの対応
 * https://github.com/Nodlik/react-pageflip/issues/21
 */
const temp = {} as typeof HTMLFlipBook["arguments"];

const Home: NextPage = () => {
  const book = useRef();

  return (
    <div className={style.container}>
      <Head>
        <title>Album</title>
        <meta name="description" content="Album" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={style.main}>
        <HTMLFlipBook
          {...temp}
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          // maxShadowOpacity={0.5}
          showCover={true}
          onInit={(event) => {
            console.log(event);
          }}
          onChangeOrientation={(mode) => {
            console.log(mode);
          }}
          onFlip={(event) => {
            console.log(event);
          }}
          ref={book}
          className={style.main__book}
        >
          <div className={style.main__demo}>
            <div className={style.main__demoContent}>My Album</div>
          </div>
          <div className={style.main__demo}>
            <div className={style.main__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.main__demoContentImage}
              />
            </div>
          </div>
          <div className={style.main__demo}>
            <div className={style.main__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.main__demoContentImage}
              />
            </div>
          </div>
          <div className={style.main__demo}>
            <div className={style.main__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.main__demoContentImage}
              />
            </div>
          </div>
          <div className={style.main__demo}>
            <div className={style.main__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.main__demoContentImage}
              />
            </div>
          </div>
          <div className={style.main__demo}>
            <div className={style.main__demoContent}>to be continue.</div>
          </div>
        </HTMLFlipBook>
      </main>
    </div>
  );
};

export default Home;
