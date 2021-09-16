import { FC, RefObject } from "react";
import { createClassName } from "../../../utils";
import style from "./style.module.scss";

type Props = {
  ref?: RefObject<HTMLDivElement>;
  className?: string;
};

const Page1: FC<Props> = ({ ref, className }) => {
  return (
    <div ref={ref} className={createClassName([style.Page1, className])}>
      <div className={style.Page1__image}>
        <img
          src="https://picsum.photos/560/560"
          alt=""
          width={560}
          height={560}
          className={style.Page1__imageContent}
        />
      </div>
    </div>
  );
};

export default Page1;
