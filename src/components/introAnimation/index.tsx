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
          `/public/assets/SkillsIcons/${data[index % data.length].image}`,
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
      {animating && image && <img src={image} />}
      {!animating ? (
        <div className={style.title}>
          <h1 className={style.word}>L</h1>
          <h1 className={style.title}>
            <WritingTextAnimation
              text={"ucas Cardoso"}
              velocity={120}
              initialDelay={2000}
              style={style}
            />
          </h1>
        </div>
      ) : null}
    </div>
  );
}
