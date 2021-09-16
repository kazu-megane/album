import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect, FC, Children } from "react";
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
  config,
  useTrail,
} from "react-spring";
import style from "./style.module.scss";

function createClassName(classNames: Array<string>) {
  return classNames.join(" ");
}

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
    onRest: () => setIsVisible(true),
  });

  const spring3 = useSpring({
    ref: ref3,
    config: config.slow,
    to: {
      bottom: "0",
      width: "100%",
      height: "100vh",
      left: 0,
      backgroundColor: "black",
    },
    from: {
      bottom: "0",
      width: "100%",
      height: "0%",
      left: 0,
      backgroundColor: "black",
    },
  });

  useChain([ref1, ref2, ref3], [1, 2, 3]);

  return (
    <div className={style.container}>
      <Head>
        <title>Album</title>
        <meta name="description" content="Album" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={style.main}>
        <div className={style.main__text}>
          アルバムは<Link href="/album">こちらへ</Link>
        </div>
        <animated.div style={spring1}>あああああ</animated.div>
        <animated.div style={spring2}>いいいいいいい</animated.div>
        <animated.div style={spring3} className={style.main__cover} />
        <Trail isVisible={isVisible} className={style.main__boxes}>
          <span className={style.main__box}>私</span>
          <span className={style.main__box} />
          <span className={style.main__box} />
          <span className={style.main__box} />
        </Trail>
      </main>
    </div>
  );
};

export default Home;
