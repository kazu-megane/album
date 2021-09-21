import { FC } from "react";
import { createClassName } from "../../utils";
import style from "./style.module.scss";

const Schedule: FC = () => {
  return (
    <div className={style.Schedule}>
      <div className={style.Schedule__noteWrapper}>
        <div className={style.Schedule__note}>
          <p
            className={createClassName([
              style.Schedule__noteMessage,
              style["Schedule__noteMessage--new"],
            ])}
          >
            鈴木愛香 生誕祭
          </p>
          <p className={style.Schedule__noteMessage}>
            開催日：9/23(木)〜9/24(金)
          </p>
          <p className={style.Schedule__noteMessage}>場所：お楽しみ</p>
          <p
            className={createClassName([
              style.Schedule__noteMessage,
              style["Schedule__noteMessage--new"],
            ])}
          >
            持ち物：着替え、その他
          </p>
          <p
            className={createClassName([
              style.Schedule__noteMessage,
              style["Schedule__noteMessage--new"],
            ])}
          >
            備考：
            <br />
            雨天結構ですので、準備はしっかりしておいてください。
            <br />
            夕食は17時30分からとなりますので、お腹は空かせといてください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
