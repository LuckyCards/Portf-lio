import { useEffect, useState } from "react";

type Types = {
  text: string;
  velocity: number;
  initialDelay: number;
  initialLetter: string;
  style: CSSModuleClasses;
};

export default function WritingTextAnimation({
  initialLetter,
  text,
  velocity,
  initialDelay,
  style,
}: Types) {
  const [word, setWord] = useState(initialLetter);

  useEffect(() => {
    let currentText = initialLetter;
    const timeoutDelay = setTimeout(() => {
      for (let i = 0; i < text.length; i++) {
        const timeoutVelocity = setTimeout(() => {
          currentText += text.charAt(i);
          setWord(currentText);
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
