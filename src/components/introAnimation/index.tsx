import WritingTextAnimation from "../writingTextAnimation";
import style from "./introAnimation.module.scss";

export default function IntroAnimation() {
  return (
    <>
      <WritingTextAnimation text="Olá mundo" velocity={0} />
      <div className={style.container}></div>
    </>
  );
}
