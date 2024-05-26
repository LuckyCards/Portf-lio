import { useState } from "react";
import style from "./carrouselAnimation.module.scss";

type Icons = {
  image: string;
  alt: string;
};

type CarrouselProps = {
  initialImages: {
    allIcons: Icons[];
  };
};

export default function CarrouselAnimation({ initialImages }: CarrouselProps) {
  const [images, _] = useState(initialImages);

  function renderCarrouselIcons(icons: Icons[]) {
    return icons.map((e: Icons) => (
      <img
        key={e.image}
        src={`../../../public/assets/SkillsIcons/${e.image}Uncolor.png`}
        alt=""
      />
    ));
  }

  return (
    <div className={style.containerCarrousel}>
      <div className={style.images}>
        {renderCarrouselIcons(images.allIcons)}
        {renderCarrouselIcons(images.allIcons)}
      </div>
    </div>
  );
}
