import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
  config,
  useTrail,
} from "react-spring";
import { createClassName } from "../../utils";
import style from "./style.module.scss";

/**
 * TODO: react-pageflipでISSUEが切られていたのでそれが解決されるまでの対応
 * https://github.com/Nodlik/react-pageflip/issues/21
 */
const temp = {} as typeof HTMLFlipBook["arguments"];

const Album: NextPage = () => {
  const book = useRef();
  const ref1 = useSpringRef();
  const ref2 = useSpringRef();

  const [page1, setPage1] = useState(0);

  const spring1 = useSpring({
    ref: ref1,
    config: config.molasses,
    opacity: page1 >= 1 ? "1" : "0",
  });

  const spring2 = useSpring({
    ref: ref2,
    config: config.molasses,
    opacity: page1 >= 1 ? "1" : "0",
  });

  useChain([ref1, ref2], [1, 2]);

  return (
    <>
      <Head>
        <title>Album</title>
        <meta name="description" content="Album" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={style.Album}>
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
            const page = event.data;
            if (page >= 1) {
              setPage1(page);
            }
          }}
          ref={book}
          className={style.Album__book}
        >
          <div className={style.Album__page}>
            <div className={style.Album__cover}>Aika's Album</div>
          </div>
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src="/images/20210131-DSCF3342.jpg"
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                初めて会った表参道。
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                これが、物語の始まり。
              </animated.p>
            </div>
          </div>
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src="/images/20210214-DSC02908.jpg"
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src="/images/20210214-DSC02933.jpg"
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                鎌倉
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                @2021/02/15
              </animated.p>
            </div>
          </div>
          <div className={style.Album__demo}>
            <div className={style.Album__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.Album__demoContentImage}
              />
            </div>
          </div>
          <div className={style.Album__demo}>
            <div className={style.Album__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.Album__demoContentImage}
              />
            </div>
          </div>
          <div className={style.Album__demo}>
            <div className={style.Album__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.Album__demoContentImage}
              />
            </div>
          </div>
          <div className={style.Album__demo}>
            <div className={style.Album__demoContent}>
              <img
                src="https://picsum.photos/560/560"
                width={560}
                height={560}
                className={style.Album__demoContentImage}
              />
            </div>
          </div>
          <div className={style.Album__demo}>
            <div className={style.Album__demoContent}>to be continue.</div>
          </div>
        </HTMLFlipBook>
      </main>
    </>
  );
};

export default Album;
