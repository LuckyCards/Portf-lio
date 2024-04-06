import { useState } from "react";
import IntroAnimation from "../../components/introAnimation";
import style from "./home.module.scss";
// import WriteTextAnimation from "../../components/writeTextAnimation";
// import CarrouselAnimation from "../../components/carrouselAnimation";

export default function HomeSection() {
  const [endIntro, setEndIntro] = useState(false);
  return (
    <>
      {!endIntro ? (
        <div className={style.container}>
          <IntroAnimation
            interval={600}
            multiplyerDelay={0.9}
            duration={1200}
            endIntro={setEndIntro}
          />
        </div>
      ) : (
        <div className={style.container}>
          <h1 className={style.title}>Lucas Cardoso</h1>
          {/* <div className={style.others}>
            <WriteTextAnimation
              initialDelay={500}
              style={style}
              text="&lt;Desenvolvedor Front End /&gt;"
              velocity={120}
            />
          </div> */}
        </div>
      )}
    </>
  );
}
