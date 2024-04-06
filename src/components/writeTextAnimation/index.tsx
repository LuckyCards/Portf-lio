import { useEffect, useState } from "react";

type Types = {
  text: string;
  velocity: number;
  style: CSSModuleClasses;
  initialDelay?: number;
  initialLetter?: string;
  endAnimation?: any;
};

export default function WriteTextAnimation({
  text,
  velocity,
  style,
  initialDelay = 0,
  initialLetter = "",
  endAnimation = null,
}: Types) {
  const [word, setWord] = useState(initialLetter);

  useEffect(() => {
    let typedText = initialLetter;
    const timeoutDelay = setTimeout(() => {
      for (let i = 0; i < text.length; i++) {
        const timeoutVelocity = setTimeout(() => {
          typedText += text.charAt(i);
          setWord(typedText);
          if (endAnimation != null) {
            if (i === text.length - 1) endAnimation(true);
          }
        }, i * velocity);
        if (i === text.length) {
          clearTimeout(timeoutVelocity);
          clearTimeout(timeoutDelay);
        }
      }
    }, initialDelay);
  }, [text, velocity]);

  return (
    <span className={style.word}>
      {word}
      <span className={style.bar} />
    </span>
  );
}
