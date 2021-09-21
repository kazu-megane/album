import { FC } from "react";
import { createClassName } from "../utils";
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
            <br />
            presented by Kazuya.
          </p>
          <p className={style.Schedule__noteMessage}>
            開催日：9/23(木)〜9/24(金)（9/23の夜、9/24のお昼含む）
          </p>
          <p className={style.Schedule__noteMessage}>場所：お楽しみ</p>
          <p
            className={createClassName([
              style.Schedule__noteMessage,
              style["Schedule__noteMessage--new"],
            ])}
          >
            持ち物：着替え、その他（わくわくした気持ちなど）
          </p>
          <p
            className={createClassName([
              style.Schedule__noteMessage,
              style["Schedule__noteMessage--new"],
            ])}
          >
            備考：
            <br />
            雨天決行ですので、準備はしっかりとしておいてください。
            <br />
            夕食は17時30分からとなりますので、お腹は空かせといてください。
            <br />
            服装はカジュアルすぎない方が良いかと思います。
          </p>
          <p
            className={createClassName([
              style.Schedule__noteMessage,
              style["Schedule__noteMessage--new"],
            ])}
          >
            何か不明点がございましたら、お気軽にお聞きください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
