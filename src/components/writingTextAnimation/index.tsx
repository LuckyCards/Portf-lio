import { useEffect, useState } from "react";
import style from "./writingTextAnimation.module.scss";

type Types = {
  text: string;
  velocity: number;
};
export default function WritingTextAnimation({ text, velocity }: Types) {
  const [listLetters, _] = useState([text.split("")]);
  const [word, setWord] = useState("");

  const animate = () => {
    if (word.length <= text.length) {
      setWord((prev) => prev + listLetters);
    }
  };

  useEffect(() => {
    console.log(listLetters);
  }, []);

  return (
    <div className={style.container}>
      <span className={style.word}>{word}</span>
    </div>
  );
}
