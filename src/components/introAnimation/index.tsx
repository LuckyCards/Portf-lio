import WritingTextAnimation from "../writingTextAnimation";
import data from "./data.json";
import style from "./introAnimation.module.scss";
import { useEffect, useState } from "react";

type Types = {
  interval: number;
  duration: number;
  multiplyerDelay: number;
};

export default function IntroAnimation({
  interval,
  multiplyerDelay,
  duration,
}: Types) {
  const [index, setIndex] = useState<number>(0);
  const [delay, setDelay] = useState<number>(interval);
  const [image, setImage] = useState<string>("");
  const [animating, setAnimating] = useState<boolean>(true);

  useEffect(() => {
    if (animating) {
      const intervalId = setInterval(() => {
        setImage(
          `/public/assets/SkillsIcons/${data[index % data.length].image}`
        );
        setIndex((prevIndex) => prevIndex + 1);
        setDelay((prevDelay) => prevDelay * multiplyerDelay);
      }, delay);

      if (delay <= 50) {
        setDelay(50);
        const timeoutId = setTimeout(() => {
          setAnimating(false);

          return () => clearTimeout(timeoutId);
        }, duration);
      }

      return () => clearInterval(intervalId);
    }
  }, [index, delay, animating]);

  return (
    <div className={style.container}>
      {animating && image && (
        <div className={style.borderImage}>
          <img src={image} />
        </div>
      )}
      {!animating ? (
        <h1 className={style.word}>
          <WritingTextAnimation
            text={"ucas Cardoso"}
            velocity={120}
            initialLetter="L"
            initialDelay={1200}
            style={style}
          />
        </h1>
      ) : null}
    </div>
  );
}
