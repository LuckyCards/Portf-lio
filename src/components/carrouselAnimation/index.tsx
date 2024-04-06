import style from "./carrouselAnimation.module.scss";
import data from "../../../public/assets/jsons/icons.json";
import { useEffect } from "react";

export default function CarrouselAnimation() {
  useEffect(() => {}, []);

  return (
    <div className={style.containerCarrousel}>
      <div className={style.images}>
        {data["allIcons"].map((e) => {
          return (
            <img
              src={`../../../public/assets/SkillsIcons/${e.image}Uncolor.png`}
              alt={e.alt}
            />
          );
        })}
      </div>
    </div>
  );
}
