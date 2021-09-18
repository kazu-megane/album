import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState, FC, Children } from "react";
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
  config,
  useTrail,
} from "react-spring";
import { createClassName, url } from "../utils";
import style from "./style.module.scss";

const Trail: FC<{ isVisible: boolean; className?: string }> = ({
  isVisible,
  children,
  className,
}) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: config.slow,
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 100,
    from: { opacity: 0, x: 100 },
  });
  return (
    <div className={className}>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ref1 = useSpringRef();
  const ref2 = useSpringRef();
  const ref3 = useSpringRef();

  const spring1 = useSpring({
    ref: ref1,
    config: config.molasses,
    to: {
      opacity: "1",
    },
    from: {
      opacity: "0",
    },
  });

  const spring2 = useSpring({
    ref: ref2,
    config: config.molasses,
    to: {
      opacity: "1",
    },
    from: {
      opacity: "0",
    },
  });

  const spring3 = useSpring({
    ref: ref3,
    delay: 1000,
    config: config.slow,
    to: {
      bottom: "0",
      width: "100%",
      height: "100vh",
      left: 0,
      backgroundColor: "#45858C",
    },
    from: {
      bottom: "0",
      width: "100%",
      height: "0%",
      left: 0,
      backgroundColor: "#ffff",
    },
    onStart: () => {
      setIsVisible(true);
    },
  });

  useChain([ref1, ref2, ref3], [1, 3, 5]);

  return (
    <div className={style.container}>
      <Head>
        <title>Album</title>
        <meta name="description" content="Album" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={style.main}>
        <animated.p style={spring1} className={style.main__message}>
          お誕生日おめでとう！
        </animated.p>
        <animated.p style={spring2} className={style.main__message}>
          世界で一番、
          <br />
          可愛いあいかに贈りものをするね。
        </animated.p>
        <animated.div style={spring3} className={style.main__cover}>
          {isVisible ? (
            <>
              <div className={style.main__ribon}>
                <p className={style.main__ribonText}>Happy Birthday!!</p>
              </div>
              <div>
                <img src={url("/images/aika.jpg")} width={200} height={200} />
              </div>
              <div className={style.main__textWrap}>
                <Link href="/album">
                  <a className={style.main__text}>プレゼントを見る</a>
                </Link>
              </div>
            </>
          ) : null}
        </animated.div>
      </main>
    </div>
  );
};

export default Home;
