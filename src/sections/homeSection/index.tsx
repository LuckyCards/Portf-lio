import { useState } from "react";
import IntroAnimation from "../../components/introAnimation";
import style from "./home.module.scss";
import dataIcons from "../../../public/assets/jsons/icons.json";
import CarrouselAnimation from "../../components/carrouselAnimation";

export default function HomeSection() {
  const [endIntro, setEndIntro] = useState(false);
  return (
    <>
      {!endIntro ? (
        <div className={style.container}>
          <IntroAnimation
            interval={400}
            multiplyerDelay={0.9}
            duration={1000}
            endIntro={setEndIntro}
          />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.titles}>
            <h1 className={style.titleWrite}>Lucas Cardoso</h1>
            <h2 className={style.subtitleWrite}>
              &lt;Desenvolvedor Front End/&gt;
            </h2>
          </div>
          <div className={style.carrousel}>
            <CarrouselAnimation initialImages={dataIcons} />
          </div>
        </div>
      )}
    </>
  );
}
