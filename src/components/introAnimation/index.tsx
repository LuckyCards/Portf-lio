import WriteTextAnimation from "../writeTextAnimation";
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
        fetch("/assets/jsons/icons.json")
          .then((response) => response.json())
          .then((data) => {
            setImage(
              `/assets/SkillsIcons/${data["mainIcons"][index % data["mainIcons"].length].image}.png`
            );
          });
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
        <div className={style.titles}>
          <WriteTextAnimation
            text={"ucas Cardoso"}
            velocity={120}
            initialLetter="L"
            initialDelay={1200}
            style={style.titleWrite}
          />

          <WriteTextAnimation
            text={"<Desenvolvedor Front End/>"}
            velocity={120}
            initialDelay={1200}
            style={style.subtitleWrite}
            endAnimation={endIntro}
          />
        </div>
      ) : null}
    </div>
  );
}
