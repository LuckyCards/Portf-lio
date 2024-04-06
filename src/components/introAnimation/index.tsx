import WriteTextAnimation from "../writeTextAnimation";
import data from "../../../public/assets/jsons/icons.json";
import style from "./introAnimation.module.scss";
import { useEffect, useState } from "react";

type Types = {
  interval: number;
  duration: number;
  multiplyerDelay: number;
  endIntro: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function IntroAnimation({
  interval,
  multiplyerDelay,
  duration,
  endIntro,
}: Types) {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(interval);
  const [image, setImage] = useState("");
  const [endIntroAnimation, setEndIntroAnimation] = useState(false);
  
  useEffect(() => {
    if (!endIntroAnimation) {
      const animationIntervalId = setInterval(() => {
        setImage(
          `/public/assets/SkillsIcons/${data["mainIcons"][index % data["mainIcons"].length].image}.png`
        );
        setIndex((prevIndex) => prevIndex + 1);
        setDelay((prevDelay) => prevDelay * multiplyerDelay);
      }, delay);

      if (delay <= 50) {
        setDelay(50);
        const timeoutId = setTimeout(() => {
          setEndIntroAnimation(true);

          return () => clearTimeout(timeoutId);
        }, duration);
      }

      return () => clearInterval(animationIntervalId);
    }
  }, [index, delay, endIntroAnimation]);

  return (
    <div className={style.container}>
      {!endIntroAnimation && image && (
        <div className={style.borderImage}>
          <img src={image} />
        </div>
      )}
      {endIntroAnimation ? (
        <h1 className={style.word}>
          <WriteTextAnimation
            text={"etão é um mané"}
            velocity={120}
            initialLetter="V"
            initialDelay={1200}
            endAnimation={endIntro}
            style={style}
          />
        </h1>
      ) : null}
    </div>
  );
}
