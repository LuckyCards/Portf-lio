import IntroAnimation from "../../components/introAnimation";
import style from "./home.module.scss";

export default function HomeSection() {
  return (
    <div className={style.container}>
      <IntroAnimation />
    </div>
  );
}
