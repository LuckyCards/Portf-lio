import IntroAnimation from "../../components/introAnimation";
import style from "./home.module.scss";

export default function HomeSection() {
  return (
    <div className={style.container}>
      <IntroAnimation interval={600} multiplyerDelay={0.9} duration={1200} />
    </div>
  );
}
