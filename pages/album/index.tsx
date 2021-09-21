import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState, useCallback, useEffect } from "react";

import HTMLFlipBook from "react-pageflip";
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
  config,
} from "react-spring";
import { createClassName, url } from "../../utils";
import style from "./style.module.scss";

const MODE = {
  LANDSCAPE: "landscape",
  PORTRATE: "portrait",
} as const;

/**
 * TODO: react-pageflipでISSUEが切られていたのでそれが解決されるまでの対応
 * https://github.com/Nodlik/react-pageflip/issues/21
 */
const temp = {} as typeof HTMLFlipBook["arguments"];

const Album: NextPage = () => {
  const book = useRef();
  const ref1 = useSpringRef();
  const ref2 = useSpringRef();
  const ref3 = useSpringRef();
  const ref4 = useSpringRef();
  const ref5 = useSpringRef();
  const ref6 = useSpringRef();
  const ref7 = useSpringRef();
  const ref8 = useSpringRef();

  const ref9 = useSpringRef();
  const ref10 = useSpringRef();
  const ref11 = useSpringRef();
  const ref12 = useSpringRef();
  const ref13 = useSpringRef();

  const [mode, setMode] = useState<typeof MODE[keyof typeof MODE]>(
    MODE.LANDSCAPE
  );

  const [isLoaded, setIsLoaded] = useState(false);

  const [page, setPage] = useState(0);

  const [isDisplayedPage1, setIsDisplayedPage1] = useState(false);
  const [isDisplayedPage2, setIsDisplayedPage2] = useState(false);
  const [isDisplayedPage3, setIsDisplayedPage3] = useState(false);
  const [isDisplayedPage4, setIsDisplayedPage4] = useState(false);
  const [isDisplayedPage23, setIsDisplayedPage23] = useState(false);
  const [isDisplayedPage34, setIsDisplayedPage34] = useState(false);

  const spring1 = useSpring({
    ref: ref1,
    config: config.molasses,
    opacity: isDisplayedPage1 ? "1" : "0",
  });

  const spring2 = useSpring({
    ref: ref2,
    config: config.molasses,
    opacity: isDisplayedPage1 ? "1" : "0",
  });

  const spring3 = useSpring({
    ref: ref3,
    config: config.molasses,
    opacity: isDisplayedPage2 ? "1" : "0",
  });

  const spring4 = useSpring({
    ref: ref4,
    config: config.molasses,
    opacity: isDisplayedPage4 ? "1" : "0",
  });

  const spring5 = useSpring({
    ref: ref5,
    config: config.molasses,
    opacity: isDisplayedPage3 ? "1" : "0",
  });

  const spring6 = useSpring({
    ref: ref6,
    config: config.molasses,
    opacity: isDisplayedPage3 ? "1" : "0",
  });

  const spring7 = useSpring({
    ref: ref7,
    config: config.molasses,
    opacity: isDisplayedPage3 ? "1" : "0",
  });

  const spring8 = useSpring({
    ref: ref8,
    config: config.molasses,
    opacity: isDisplayedPage23 ? "1" : "0",
  });

  const spring9 = useSpring({
    ref: ref9,
    config: config.molasses,
    opacity: isDisplayedPage34 ? "1" : "0",
  });

  const spring10 = useSpring({
    ref: ref10,
    config: config.molasses,
    opacity: isDisplayedPage34 ? "1" : "0",
  });

  const spring11 = useSpring({
    ref: ref11,
    config: config.molasses,
    opacity: isDisplayedPage34 ? "1" : "0",
  });

  const spring12 = useSpring({
    ref: ref12,
    config: config.molasses,
    opacity: isDisplayedPage34 ? "1" : "0",
  });

  const spring13 = useSpring({
    ref: ref13,
    config: config.molasses,
    opacity: isDisplayedPage34 ? "1" : "0",
  });

  useChain([ref1, ref2], [1, 2]);
  useChain([ref3], [1]);
  useChain([ref4], [1]);
  useChain([ref5, ref6, ref7], [1, 2, 3]);
  useChain([ref8], [1]);
  useChain([ref9, ref10, ref11, ref12, ref13], [1, 2, 4, 6, 8]);

  useEffect(() => {
    if (mode === MODE.LANDSCAPE) {
      if (page >= 1) {
        setIsDisplayedPage1(true);
        setIsDisplayedPage2(true);
      }
      if (page >= 3) {
        setIsDisplayedPage4(true);
      }
      if (page >= 15) {
        setIsDisplayedPage3(true);
      }
      if (page >= 23) {
        setIsDisplayedPage23(true);
      }
      if (page >= 33) {
        setIsDisplayedPage34(true);
      }
    }
    if (mode === MODE.PORTRATE) {
      if (page >= 1) {
        setIsDisplayedPage1(true);
      }
      if (page >= 2) {
        setIsDisplayedPage2(true);
      }
      if (page >= 4) {
        setIsDisplayedPage4(true);
      }
      if (page >= 15) {
        setIsDisplayedPage3(true);
      }
      if (page >= 23) {
        setIsDisplayedPage23(true);
      }
      if (page >= 34) {
        setIsDisplayedPage34(true);
      }
    }
  }, [page, mode]);

  return (
    <>
      <Head>
        <title>Album</title>
        <meta name="description" content="Album" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main
        className={createClassName([
          style.Album,
          isLoaded ? "" : style["Album--loading"],
        ])}
      >
        <HTMLFlipBook
          {...temp}
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          showCover={true}
          onInit={(event) => {
            console.log(event);
            if (event.data.mode === MODE.LANDSCAPE) {
              setMode(MODE.LANDSCAPE);
            } else {
              setMode(MODE.PORTRATE);
            }
            setIsLoaded(true);
          }}
          onChangeOrientation={(event) => {
            console.log(mode);
            if (event.data === MODE.LANDSCAPE) {
              setMode(MODE.LANDSCAPE);
            } else {
              setMode(MODE.PORTRATE);
            }
          }}
          onFlip={(event) => {
            const page = event.data;
            setPage(page);
          }}
          ref={book}
          className={style.Album__book}
        >
          {/* 表紙 */}
          <div className={style.Album__page}>
            {/* <div className={style.Album__cover}>Aika&apos;s Album</div> */}
            <div className={style.Album__cover}>
              <p className={style.Album__coverText}>Aika Suzuki</p>
              <p className={style.Album__coverText}>26 years old</p>
            </div>
          </div>
          {/* 1ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-1.jpg")}
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
            </div>
          </div>
          {/* 2ページ（空白ページ） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageContent}>
              <div className={style.Album__pageContentTextWrapper}>
                <animated.p
                  style={mode === MODE.LANDSCAPE ? spring2 : spring3}
                  className={style.Album__pageContentText}
                >
                  これが、物語の始まり。
                </animated.p>
              </div>
            </div>
          </div>
          {/* 3ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-2.jpg")}
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
                  src={url("/images/album-3.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <p className={style.Album__text}>
                鎌倉
                <br />
                @2021/02/15
              </p>
            </div>
          </div>
          {/* 4ページ（空白ページ） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageContent}>
              <div className={style.Album__pageContentTextWrapper}>
                <animated.p
                  style={spring4}
                  className={style.Album__pageContentText}
                >
                  ちゃんと告白した。恥ずかしかった。
                </animated.p>
                <animated.p
                  style={spring4}
                  className={style.Album__pageContentText}
                >
                  良い返事ももらえた。
                </animated.p>
                <animated.p
                  style={spring4}
                  className={style.Album__pageContentText}
                >
                  嬉しかった。
                </animated.p>
              </div>
            </div>
          </div>
          {/* 5ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-4.jpg")}
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
                  src={url("/images/album-5.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p
                style={spring1}
                className={style.Album__text}
              ></animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                初めての2人での旅行
              </animated.p>
            </div>
          </div>
          {/* 6ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-6.jpg")}
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
                  src={url("/images/album-7.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring2} className={style.Album__text}>
                箱根本箱
                <br />
                @2021/02/15
              </animated.p>
            </div>
          </div>
          {/* 7ページ目（横画像1枚） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-8.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 8ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-9.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 9ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-10.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                軽井沢
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                @2021/04/10
              </animated.p>
            </div>
          </div>
          {/* 10ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-11.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 11ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-12.jpg")}
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
                  src={url("/images/album-13.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                足利フラワーパーク
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                @2021/05/01
              </animated.p>
            </div>
          </div>
          {/* 12ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-14.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 13ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-15.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 14ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-16.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 15ページ（空白ページ） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageContent}>
              <div className={style.Album__pageContentTextWrapper}>
                <animated.p
                  style={spring5}
                  className={style.Album__pageContentText}
                >
                  日常的なあいかを見れて私は幸せだ。
                </animated.p>
                <animated.p
                  style={spring6}
                  className={style.Album__pageContentText}
                >
                  笑った顔、怒った顔、悲しい顔、寂しい顔。
                </animated.p>
                <animated.p
                  style={spring7}
                  className={style.Album__pageContentText}
                >
                  8ヶ月間くらいの間だけど、まるで四季を見ている様だ。
                </animated.p>
              </div>
            </div>
          </div>
          {/* 16ページ目（横長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-17.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 17ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-18.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 18ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-19.jpg")}
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
                  src={url("/images/album-20.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                猿島
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                @2021/05/09
              </animated.p>
            </div>
          </div>
          {/* 19ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-21.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 20ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-22.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 21ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-23.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                飛鳥山公園
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                @2021/06/13
              </animated.p>
            </div>
          </div>
          {/* 22ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-24.jpg")}
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
                  src={url("/images/album-25.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 23ページ（空白ページ） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageContent}>
              <div className={style.Album__pageContentTextWrapper}>
                <animated.p
                  style={spring8}
                  className={style.Album__pageContentText}
                >
                  そして、同棲が始まった。
                </animated.p>
                <animated.p
                  style={spring8}
                  className={style.Album__pageContentText}
                >
                  新しい生活の始まり。
                </animated.p>
              </div>
            </div>
          </div>
          {/* 24ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-26.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 25ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-29.jpg")}
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
                  src={url("/images/album-30.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                びちょびちょになった雨の日
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                @2021/07/11
              </animated.p>
            </div>
          </div>
          {/* 26ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-27.jpg")}
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
                  src={url("/images/album-28.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <animated.p style={spring1} className={style.Album__text}>
                ピエールエルメ・アフタヌーンティー
              </animated.p>
              <animated.p style={spring2} className={style.Album__text}>
                @2021/07/25
              </animated.p>
            </div>
          </div>
          {/* 27ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-31.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <p className={style.Album__text}>夏らしいことをした日</p>
            </div>
          </div>
          {/* 28ページ目（縦長画像） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageImage}>
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page1Image,
                ])}
              >
                <img
                  src={url("/images/album-32.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
            <div className={style.Album__texts}>
              <p className={style.Album__text}>
                葛西臨海公園
                <br />
                @2021/08/01
              </p>
            </div>
          </div>
          {/* 29ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-33.jpg")}
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
                  src={url("/images/album-34.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 30ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-35.jpg")}
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
                  src={url("/images/album-36.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 31ページ目（横画像2枚） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-37.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 32ページ（空白ページ） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageContent}>
              <div className={style.Album__pageContentTextWrapper}>
                <p className={style.Album__pageContentText}>
                  熱海 @2021/08/13-14
                </p>
                <p className={style.Album__pageContentText}>
                  旅行楽しかったね。
                </p>
                <p className={style.Album__pageContentText}>また行こ。</p>
              </div>
            </div>
          </div>
          {/* 33ページ目（横画像1枚） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div
                className={createClassName([
                  style.Album__image,
                  style.Album__page2Image,
                ])}
              >
                <img
                  src={url("/images/album-38.jpg")}
                  width={560}
                  height={560}
                  className={style.Album__imageContent}
                />
              </div>
            </div>
          </div>
          {/* 34ページ（空白ページ） */}
          <div className={style.Album__page}>
            <div className={style.Album__pageContent}>
              <div className={style.Album__pageContentTextWrapper}>
                <animated.p
                  style={spring9}
                  className={style.Album__pageContentText}
                >
                  あいかと出会えて、たくさんの笑顔をもらえた。
                </animated.p>
                <animated.p
                  style={spring10}
                  className={style.Album__pageContentText}
                >
                  辛い時でもそばにいてくれた。
                </animated.p>
                <animated.p
                  style={spring11}
                  className={style.Album__pageContentText}
                >
                  これからも、
                </animated.p>
                <animated.p
                  style={spring12}
                  className={style.Album__pageContentText}
                >
                  あいかのことは俺が幸せにします。
                </animated.p>
                <animated.p
                  style={spring13}
                  className={style.Album__pageContentText}
                >
                  いつもそばにいます。
                </animated.p>
              </div>
            </div>
          </div>
          {/* 35ページ目（動画） */}
          <div className={style.Album__page}>
            <div
              className={createClassName([
                style.Album__pageImage,
                style["Album__pageImage--full"],
              ])}
            >
              <div className={style.Album__videoWraper}>
                <iframe
                  width="297"
                  height="528"
                  src={
                    "https://www.youtube.com/embed/kvKz9FFtWw0?playsinline=1"
                  }
                  className={style.Album__video}
                />
              </div>
            </div>
          </div>
          <div className={style.Album__page}>
            <div className={style.Album__cover}>
              <p className={style.Album__coverMessage}>
                これからも楽しい思い出たくさん作ろうね。
              </p>
            </div>
          </div>
        </HTMLFlipBook>
        {mode === MODE.PORTRATE ? (
          <div className={style.Album__action}>
            <button
              onClick={() => {
                const flipBook = book.current as any;
                if (flipBook) {
                  flipBook.pageFlip().flipPrev();
                }
              }}
              className={createClassName([
                style.Album__prevButton,
                page === 0 ? style["Album__prevButton--disabled"] : "",
              ])}
            >
              PREV
            </button>
            <button
              onClick={() => {
                const flipBook = book.current as any;
                if (flipBook) {
                  flipBook.pageFlip().flipNext();
                }
              }}
              className={createClassName([
                style.Album__nextButton,
                page === 36 ? style["Album__nextButton--disabled"] : "",
              ])}
            >
              NEXT
            </button>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default Album;
